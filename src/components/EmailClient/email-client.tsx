import React, { Component, Fragment } from 'react';
import { Container, Row, Col, Form, FormGroup, Toast, Alert, InputGroup } from 'react-bootstrap';
// HAK services
import { BotService } from '../../services/bot-service';
// HAK Utilities
import * as EmailValidator from 'email-validator';
import { Utility } from '../../common/utility';
// HAK models
import { AnswersVM } from '../../models/answer';
import { ContentTagVM } from '../../models/content-tag';
import { Email, EmailVM, EmailBasic, EmailBasicVM } from '../../models/email';
import { EmailAddressVM, EmailAddress } from '../../models/email-address';
import { Player, PlayerVM } from '../../models/player';
import { Question, QuestionVM, StrictFilter } from '../../models/question';
// Utilities
import moment from 'moment';
import { filter as _filter } from 'lodash';
// HAK styles
import '../../styles/app.scss';

//Configuration
import Config from "../../secrets/config.json"
import { ConfigurationVM } from 'models/configuration';

interface Props {
    initialEmailSubject: string;
    configurationLocation: string;
    botEmailResponse: FunctionStringCallback;
    currentEpisode: number;
}

interface State {
    characterName: string;
    characterEmail: string;
    characterAvatar: string;
    characters: Array<EmailAddressVM>;
    player: PlayerVM;
    initialEmailSubject: string;
    configurationLocation: string;
    currentEpisode: number;
    maxLengthCharacters: number;
    inboxLoadQuestionPrefix: string;
    endpointRoot: string;
    botKnowledgeBaseId: string;
    botAuthorizationEndpointKey: string;
    botScoreThreshold: number;
    botRankerType: string;
    botMetaTag: string;
    qualifySubjectWithToEmailAddress: boolean;
    receiveEmailResponseDelay: number;
    emailReplyWhenNoBotAnswer: string;
    inbox: Array<EmailVM>;
    fullInbox: Array<EmailVM>;
    sentBox: Array<EmailVM>;
    fullSentBox: Array<EmailVM>;
    activeList: string;
    showMailboxOptions: boolean;
    showInbox: boolean;
    showSentItems: boolean;
    showEmailDetail: boolean;
    showEmailForm: boolean;
    emailFormIsValid: boolean;
    showEmailSentToast: boolean;
    email: EmailVM;
    searchArgument: string;
    contentTagReplacements: Array<ContentTagVM>;
    showMailBox: boolean;
    errorMessage: string;
}

/**
 * Email client
 *
 * Overview: Simulates a typical email client interface.
 *
 */
export default class EmailClient extends Component<Props, State>  {
    botService: any;
    characterIndex: any;

    constructor(props: Props) {
        super(props);
        this.botService = new BotService();
        this.state = {
            characterName: '',
            characterEmail: '',
            characterAvatar: '',
            characters: [],
            player: new Player(),
            initialEmailSubject: '',
            configurationLocation: '',
            currentEpisode: 0,
            maxLengthCharacters: 45,
            inboxLoadQuestionPrefix: '',
            endpointRoot: '',
            botKnowledgeBaseId: '',
            botAuthorizationEndpointKey: '',
            botScoreThreshold: 0,
            botRankerType: '',
            botMetaTag: '',
            qualifySubjectWithToEmailAddress: false,
            receiveEmailResponseDelay: 0,
            emailReplyWhenNoBotAnswer: '',
            inbox: [],
            fullInbox: [],
            sentBox: [],
            fullSentBox: [],
            activeList: 'inbox',
            showMailboxOptions: true,
            showInbox: true,
            showSentItems: false,
            showEmailDetail: false,
            showEmailForm: false,
            emailFormIsValid: true,
            showEmailSentToast: false,
            email: new Email(),
            searchArgument: '',
            contentTagReplacements: [],
            showMailBox: false,
            errorMessage: ''
        };

        this.prepareEmailClient = this.prepareEmailClient.bind(this);
        this.loadInbox = this.loadInbox.bind(this);
        this.sortInbox = this.sortInbox.bind(this);
        this.sortEmailChain = this.sortEmailChain.bind(this);
        this.unexpectedErrorEncountered = this.unexpectedErrorEncountered.bind(this);

        // Event handlers
        this.showInbox = this.showInbox.bind(this);
        this.showSentItems = this.showSentItems.bind(this);
        this.showEmailDetail = this.showEmailDetail.bind(this);
        this.showEmailForm = this.showEmailForm.bind(this);
        this.showEmailSentToast = this.showEmailSentToast.bind(this);
        this.goBackToList = this.goBackToList.bind(this);
        this.onSearchArgumentChange = this.onSearchArgumentChange.bind(this);

        // Form input events
        this.setFromInputValue = this.setFromInputValue.bind(this);
        this.setToInputValue = this.setToInputValue.bind(this);
        this.setBodyInputValue = this.setBodyInputValue.bind(this);

        this.initializeEmail = this.initializeEmail.bind(this);
        this.replyToEmail = this.replyToEmail.bind(this);
        this.formatQuestion = this.formatQuestion.bind(this);
        this.callAPIToGetAnswer = this.callAPIToGetAnswer.bind(this);
        this.saveEmailResponse = this.saveEmailResponse.bind(this);
        this.addEmailToInbox = this.addEmailToInbox.bind(this);
        this.populateBasicEmail = this.populateBasicEmail.bind(this);
        this.searchEmail = this.searchEmail.bind(this);
        this.constructQuestion = this.constructQuestion.bind(this);
        this.constructEmailSubject = this.constructEmailSubject.bind(this);
        this.handleEpisodeChange = this.handleEpisodeChange.bind(this);
        this.loadFromLocalStorage = this.loadFromLocalStorage.bind(this);
        this.saveToLocalStorage = this.saveToLocalStorage.bind(this);
        this.clearLocalStorage = this.clearLocalStorage.bind(this);
    }

    /**
     * componentDidMount Prepare email client.
     * @returns n/a.
     */
    componentDidMount(): void {
        this.loadFromLocalStorage();
        this.prepareEmailClient();
    }

    /**
     * loadFromLocalStorage Load data from local storage if available.
     * @returns n/a.
     */
    loadFromLocalStorage(): void {
        try {
            const savedEpisode = localStorage.getItem('emailClient_currentEpisode');
            const savedInbox = localStorage.getItem('emailClient_inbox');
            const savedSentBox = localStorage.getItem('emailClient_sentBox');
            
            if (savedEpisode) {
                const episode = parseInt(savedEpisode, 10);
                if (episode >= 1 && episode <= 5) {
                    this.setState({
                        currentEpisode: episode
                    });
                }
            }
            
            if (savedInbox) {
                const inbox = JSON.parse(savedInbox);
                this.setState({
                    inbox: inbox,
                    fullInbox: inbox
                });
            }
            
            if (savedSentBox) {
                const sentBox = JSON.parse(savedSentBox);
                this.setState({
                    sentBox: sentBox,
                    fullSentBox: sentBox
                });
            }
        } catch (error) {
            console.warn('Failed to load from local storage:', error);
        }
    }

    /**
     * saveToLocalStorage Save current state to local storage.
     * @returns n/a.
     */
    saveToLocalStorage(): void {
        try {
            localStorage.setItem('emailClient_currentEpisode', this.state.currentEpisode.toString());
            localStorage.setItem('emailClient_inbox', JSON.stringify(this.state.inbox));
            localStorage.setItem('emailClient_sentBox', JSON.stringify(this.state.sentBox));
        } catch (error) {
            console.warn('Failed to save to local storage:', error);
        }
    }

    componentWillUnmount(): void {
    }

    /**
     * prepareEmailClient Gather initial setting \ values.
     * @returns n/a.
     */
    prepareEmailClient(): void {
        const { initialEmailSubject, configurationLocation, currentEpisode } = this.props;

        let configuration: ConfigurationVM = Config;
        var maxLengthCharacters = 45;
        if (currentEpisode === 5) {
            maxLengthCharacters = 5;
        } else if (currentEpisode === 4) {
            maxLengthCharacters = 3;
        }

        var botScoreThreshold = (typeof configuration.botConfiguration?.scoreThreshold[currentEpisode] === 'undefined') ? configuration.botConfiguration.defaultScoreThreshold : Number(configuration.botConfiguration.scoreThreshold[currentEpisode]);

        this.setState({
            characterName: configuration.characters[0].name,
            characterEmail: configuration.characters[0].email,
            characterAvatar: configuration.characters[0].avatar,
            characters: configuration.characters,
            currentEpisode: currentEpisode,
            player: new Player(),
            maxLengthCharacters: maxLengthCharacters,
            contentTagReplacements: configuration.contentTagReplacements,
            initialEmailSubject: initialEmailSubject,
            configurationLocation: configurationLocation,
            inboxLoadQuestionPrefix: configuration.inboxLoadQuestionPrefix,
            endpointRoot: configuration.botConfiguration.endpointRoot,
            botKnowledgeBaseId: configuration.botConfiguration.knowledgeBaseId,
            botAuthorizationEndpointKey: configuration.botConfiguration.authorizationEndpointKey,
            botScoreThreshold: botScoreThreshold,
            botRankerType: configuration.botConfiguration.rankerType,
            botMetaTag: configuration.botConfiguration.metaTag,
            receiveEmailResponseDelay: configuration.receiveEmailResponseDelay,
            emailReplyWhenNoBotAnswer: configuration.emailReplyWhenNoBotAnswer
        }, () => {
            if (configuration.characters?.length > 0) {
                this.characterIndex = Math.floor(Math.random() * configuration.characters.length);
            }
        });
    }

    /**
     * loadInbox Call bot API to load any predefined emails to inbox.
     * @returns n/a.
     */
    loadInbox(): void {
        // Removed initial inbox loading as it's not needed
    }

    /**
     * unexpectedErrorEncountered Adds "Out of Office" email to inbox.
     * @returns n/a.
     */
    unexpectedErrorEncountered(): void {
        const inbox = this.state.inbox;
        const email = new Email();
        email.id = inbox.length + 1;
        email.replyAllowed = false;
        email.emailFrom = new EmailAddress();
        email.emailFrom.name = this.state.characterName;
        email.emailFrom.email = this.state.characterEmail;
        email.emailFrom.avatar = this.state.characterAvatar;
        email.emailTo = new EmailAddress();
        email.emailTo.name = this.state.player.name;
        email.emailTo.email = this.state.player.email;
        email.emailTo.avatar = this.state.player.avatar;
        email.subject = 'Out of Office';
        email.body = 'Sorry, I\'m currently out of the office. Check back later.';
        email.sent = moment().utc().format();
        email.received = moment().utc().format();
        inbox.push(email);
        let sortedInbox = this.sortInbox(inbox);
        this.setState({
            inbox: sortedInbox,
            fullInbox: sortedInbox
        });
    }

    /**
     * sortInbox Sorts inbox in descending order by date received.
     * @param inbox Inbox to sort.
     * @returns Array<EmailVM> Sorted inbox.
     */
    sortInbox(inbox: Array<EmailVM>): Array<EmailVM> {
        const sortedInbox = inbox.sort((t1, t2) => {
            if (moment(t1.received).isAfter(moment(t2.received))) { return -1; }
            if (moment(t1.received).isBefore(moment(t2.received))) { return 1; }
            return 0;
        });
        return sortedInbox;
    }


    /**
     * showInbox Present inbox.
     * @returns n/a.
     */
    showInbox(): void {
        this.setState({
            showMailboxOptions: true,
            showEmailDetail: false,
            showInbox: true,
            showSentItems: false,
            activeList: 'inbox',
            emailFormIsValid: true,
            email: new Email()
        });
        if (this.state.searchArgument.length === 0) {
            this.setState({
                inbox: this.state.fullInbox
            });
        }
    }

    /**
     * showSentItems Present sent items.
     * @returns n/a.
     */
    showSentItems(): void {
        this.setState({
            showMailboxOptions: true,
            showEmailDetail: false,
            showInbox: false,
            showSentItems: true,
            activeList: 'sent',
            email: new Email()
        });
        if (this.state.searchArgument.length === 0) {
            this.setState({
                sentBox: this.state.fullSentBox
            });
        }
    }

    /**
     * showEmailDetail Present email detail.
     * @param email The selected email.
     * @param index The index of the item in the array.
     * @param list Which list invoked the request to see email detail.
     * @returns n/a.
     */
    showEmailDetail(email: EmailVM, index: number, list: string): void {
        if (list === 'inbox') {
            let inbox = this.state.inbox;
            if (index >= 0) {
                inbox[index].read = moment().utc().format();
                this.setState({
                    inbox: inbox
                });
            }
            let fullInbox = this.state.fullInbox;
            if (index >= 0) {
                fullInbox[email.id - 1].read = moment().utc().format();
                this.setState({
                    fullInbox: fullInbox
                });
            }
        }

        this.setState({
            showInbox: false,
            showSentItems: false,
            showMailboxOptions: true,
            email: email,
            showEmailDetail: true,
            activeList: list
        });
    }

    /**
     * showEmailForm Present email composition form.
     * @returns n/a.
     */
    showEmailForm(): void {
        this.setState({
            showEmailForm: true,
            searchArgument: '',
            inbox: this.state.fullInbox,
            sentBox: this.state.fullSentBox
        });
    }

    /**
     * showEmailSentToast show or hide email sent notification.
     * @returns n/a.
     */
    showEmailSentToast(): void {
        const currShowEmailSentToast = !this.state.showEmailSentToast;
        this.setState({
            showMailboxOptions: true,
            showInbox: true,
            activeList: 'inbox',
            showEmailSentToast: currShowEmailSentToast
        });
    }

    /**
     * goBackToList Set appropriate view based on active list.
     * @returns n/a.
     */
    goBackToList(): void {
        switch (this.state.activeList) {
            case 'inbox':
                this.setState({
                    showEmailDetail: false,
                    showMailboxOptions: true,
                    showInbox: true
                });
                break;
            case 'sent':
                this.setState({
                    showEmailDetail: false,
                    showMailboxOptions: true,
                    showSentItems: true
                });
                break;
            default:
                this.setState({
                    showEmailDetail: false,
                    showMailboxOptions: true,
                    showInbox: true
                });
        }
    }

    /**
     * onSearchArgumentChange Save search argument to state.
     * @param value The form input value.
     * @returns n/a.
     */
    onSearchArgumentChange(value: string): void {
        this.setState({
            searchArgument: value.trim()
        });
        if (value.trim().length === 0) {
            if (this.state.activeList === 'inbox') {
                this.setState({
                    inbox: this.state.fullInbox
                });
            } else {
                this.setState({
                    sentBox: this.state.fullSentBox
                });
            }
        } else {
            this.searchEmail(value.trim());
        }
    }

    /**
     * searchEmail Searches inbox or sent email, depending on active list, for argument provided. Replace list with search results.
     * @param searchArgument The search string entered by player.
     * @returns n/a.
     */
    searchEmail(searchArgument: string): void {
        let searchResults = Array<EmailVM>();
        if (this.state.activeList === 'inbox' && this.state.inbox && this.state.inbox.length > 0) {
            let inBoxResults = _filter(this.state.inbox, function (email) {
                return email.body.indexOf(searchArgument) > -1 || email.subject.indexOf(searchArgument) > -1 || email.emailFrom.name.indexOf(searchArgument) > -1;
            });
            this.setState({
                inbox: searchResults.concat(inBoxResults)
            });
        }
        if (this.state.activeList === 'sent' && this.state.sentBox && this.state.sentBox.length > 0) {
            let sentBoxResults = _filter(this.state.sentBox, function (email) {
                return email.body.indexOf(searchArgument) > -1 || email.subject.indexOf(searchArgument) > -1 || email.emailTo.name.indexOf(searchArgument) > -1;
            });
            this.setState({
                sentBox: searchResults.concat(sentBoxResults)
            });
        }
    }

    /**
     * initializeEmail Initialize email from and to addresses.
     * @returns n/a.
     */
    initializeEmail(): void {
        const email = new Email();
        email.emailFrom = new EmailAddress();
        email.emailFrom.name = this.state.player.name;
        email.emailFrom.email = this.state.player.email;
        email.emailFrom.avatar = this.state.player.avatar;
        if (this.state.characters.length > 0) {
            email.emailTo = this.state.characters[0];
        } else {
            email.emailTo = new EmailAddress();
        }
        email.subject = this.state.initialEmailSubject;
        email.emailChain = Array<EmailBasicVM>();

        this.setState({
            showInbox: false,
            email: email,
            showEmailForm: true,
            searchArgument: '',
            showMailboxOptions: true,
            inbox: this.state.fullInbox,
            sentBox: this.state.fullSentBox
        });
    }

    /**
     * replyToEmail Initialize reply to email subject, from and to addresses.
     * @param email The email viewed by player.
     * @returns n/a.
     */
    replyToEmail(currentEmail: EmailVM): void {
        const re = /RE: /gi;
        let newSubject = currentEmail.subject.replace(re, '');
        const email = new Email();
        email.emailFrom = new EmailAddress();
        email.emailFrom.name = this.state.player.name;
        email.emailFrom.email = this.state.player.email;
        email.emailFrom.avatar = this.state.player.avatar;
        email.emailTo = currentEmail.emailFrom;
        email.subject = 'RE: ' + newSubject;
        email.emailChain = currentEmail.emailChain;
        currentEmail.id = email.emailChain.length + 1;
        email.emailChain.push(this.populateBasicEmail(currentEmail));
        email.emailChain = this.sortEmailChain(email.emailChain);

        this.setState({
            showInbox: false,
            email: email,
            showEmailForm: true,
            searchArgument: '',
            inbox: this.state.fullInbox,
            sentBox: this.state.fullSentBox
        });
    }

    /**
     * populateBasicEmail Create basic email object to load to email chain.
     * @param email Email.
     * @returns EmailBasicVM.
     */
    populateBasicEmail(email: EmailVM): EmailBasicVM {
        const emailBasic = new EmailBasic();
        emailBasic.id = email.id;
        emailBasic.emailTo = email.emailTo;
        emailBasic.emailFrom = email.emailFrom;
        emailBasic.subject = email.subject;
        emailBasic.body = email.body;
        emailBasic.sent = email.sent;
        emailBasic.received = email.received;
        emailBasic.read = email.read;
        return emailBasic;
    }

    /**
     * setFromInputValue Update email with from input value.
     * @param value The form input value.
     * @returns n/a.
     */
    setFromInputValue(value: string): void {
        if (EmailValidator.validate(value)) {
            if (typeof this.characterIndex == "number") {
                this.setToInputValue(this.state.characters[this.characterIndex].name);
            }
            let email = this.state.email;
            email.emailFrom = new EmailAddress();
            email.emailFrom.email = value;
            email.emailFrom.name = value;
            let player = new Player();
            player.name = value;
            player.email = value;
            this.setState({
                email: email,
                player
            });
        }
    }

    /**
     * setToInputValue Find selected email address in array of "to" addresses and populate email to object.
     * @param emailAddress The email to object form input value.
     * @returns n/a.
     */
    setToInputValue(value: string): void {
        let email = this.state.email;
        const emailTo = this.state.characters.findIndex(e => e.name === value);
        if (emailTo !== -1) {
            email.emailTo = new EmailAddress();
            email.emailTo.name = this.state.characters[emailTo].name;
            email.emailTo.email = this.state.characters[emailTo].email;
            email.emailTo.avatar = this.state.characters[emailTo].avatar;
        } else {
            email.emailTo = new EmailAddress();
            email.emailTo.email = value;
        }

        this.setState({
            email: email
        });
    }

    /**
     * setBodyInputValue Save body input value to state.
     * @param value The form input value.
     * @returns n/a.
     */
    setBodyInputValue(value: string): void {
        let email = this.state.email;
        email.body = value;
        email.subject = value; // Set subject to be the same as body
        this.setState({
            email: email
        });
    }

    /**
     * sendEmail Add email to sent items and get bot answer.
     * @param event The form event.
     * @returns n/a.
     */
    sendEmail = (event: any): void => {
        event.preventDefault();
        const form = event.currentTarget;
        if (form.checkValidity() === false) {
            event.preventDefault();
            event.stopPropagation();
            this.setState({ emailFormIsValid: false });
        } else {
            this.setState({ emailFormIsValid: true }, () => {
                let sentBox = this.state.sentBox;
                let email = this.state.email;
                let sentEmail = this.state.email;
                email.id = sentBox.length + 1;
                email.sent = moment().utc().format();
                sentBox.push(sentEmail);
                const sortedSentBox = sentBox.sort((t1, t2) => {
                    if (moment(t1.sent).isAfter(moment(t2.sent))) { return -1; }
                    if (moment(t1.sent).isBefore(moment(t2.sent))) { return 1; }
                    return 0;
                });
                // The full sentBox houses all sent email while the sentBox is used to display either the full or filtered sentBox.
                this.setState({
                    sentBox: sortedSentBox,
                    fullSentBox: sortedSentBox,
                    showMailboxOptions: true,
                    showMailBox: true,
                    showEmailForm: false,
                    showEmailSentToast: true
                }, () => {
                    this.saveToLocalStorage();
                });
                const question = this.formatQuestion(email);
                this.callAPIToGetAnswer(email, question);
            });
        }
    }

    /**
     * sortEmailChain Sorts email chain by sent Id in descending order.
     * @param emailChain Email chain to sort.
     * @returns Array<EmailVM> Sorted email chain.
     */
    sortEmailChain(emailChain: Array<EmailBasicVM>): Array<EmailBasicVM> {
        const sortedEmailChain = emailChain.sort((t1, t2) => {
            if (moment(t1.id).isAfter(moment(t2.id))) { return -1; }
            if (moment(t1.id).isBefore(moment(t2.id))) { return 1; }
            return 0;
        });
        return sortedEmailChain;
    }

    /**
     * callAPIToGetAnswer Call API to ask bot the question.
     * @param email The email composed by player.
     * @param question The question to ask the bot.
     * @returns n/a.
     */
    callAPIToGetAnswer(email: EmailVM, question: QuestionVM): void {
        const episodeKey = `episode:${this.state.currentEpisode}`;
        this.botService.askQuestion(question, episodeKey)
            .then((response: any) => response.json())
            .then((answers: AnswersVM) => {
                this.saveEmailResponse(email, answers);
            }, (error: any) => {
                console.log(error);
                this.unexpectedErrorEncountered();
            }
        );
    }

    /**
     * saveEmailResponse Save bot answer as email response.
     * @param email The email composed by player.
     * @param answers The bot answers.
     * @returns n/a.
     */
    saveEmailResponse(email: EmailVM, answers: AnswersVM): void {
        let that = this;
        setTimeout(function () {
            that.addEmailToInbox(email, answers);
        }, this.state.receiveEmailResponseDelay);
    }

    /**
     * handleEpisodeChange Update configuration when episode changes.
     * @param newEpisode The new episode number.
     * @returns n/a.
     */
    handleEpisodeChange(newEpisode: number): void {
        let configuration: ConfigurationVM = Config;
        var maxLengthCharacters = 45;
        if (newEpisode === 5) {
            maxLengthCharacters = 5;
        } else if (newEpisode === 4) {
            maxLengthCharacters = 3;
        }

        var botScoreThreshold = (typeof configuration.botConfiguration?.scoreThreshold[newEpisode] === 'undefined') ? configuration.botConfiguration.defaultScoreThreshold : Number(configuration.botConfiguration.scoreThreshold[newEpisode]);

        this.setState({
            currentEpisode: newEpisode,
            maxLengthCharacters: maxLengthCharacters,
            botScoreThreshold: botScoreThreshold
        }, () => {
            this.saveToLocalStorage();
        });
    }

    /**
     * addEmailToInbox Format the bot answer in the form of a response email.
     * @param email The email composed by player.
     * @param answers The answers returned by the bot.
     * @returns n/a.
     */
    addEmailToInbox(email: EmailVM, answers: AnswersVM): void {
        // Check if there's no match and increment episode if needed
        if (answers.match === null && this.state.currentEpisode < 5) {
            const newEpisode = this.state.currentEpisode + 1;
            console.log(`No match found for episode ${this.state.currentEpisode}, trying episode ${newEpisode}`);
            
            // Update episode and configuration
            this.handleEpisodeChange(newEpisode);
            
            // Retry the API call with the new episode
            setTimeout(() => {
                const question = this.formatQuestion(email);
                this.callAPIToGetAnswer(email, question);
            }, 100); // Small delay to ensure state is updated
            return;
        }

        let inbox = this.state.inbox;
        const receivedEmail = new Email();
        receivedEmail.id = inbox.length + 1;
        receivedEmail.emailFrom = email.emailTo;
        receivedEmail.emailTo = new EmailAddress();
        receivedEmail.emailTo.name = this.state.player.name;
        receivedEmail.emailTo.email = this.state.player.email;
        receivedEmail.emailTo.avatar = this.state.player.avatar;
        receivedEmail.emailChain = email.emailChain;
        email.id = email.emailChain.length + 1;
        receivedEmail.emailChain.push(this.populateBasicEmail(email));
        receivedEmail.emailChain = this.sortEmailChain(receivedEmail.emailChain);
        const re = /RE: /gi;
        receivedEmail.subject = 'RE: ' + email.subject.replace(re, '');
        receivedEmail.sent = moment().utc().format();
        receivedEmail.received = moment().utc().format();
        receivedEmail.body = answers.answer.replace(/\\n/g, '<br>');
        receivedEmail.replyAllowed = answers.match !== null;

        if (typeof this.props.botEmailResponse === 'function') {
            this.props.botEmailResponse(answers.answer);
        }
        inbox.push(receivedEmail);
        let sortedInbox = this.sortInbox(inbox);
        this.setState({
            inbox: sortedInbox,
            fullInbox: sortedInbox
        }, () => {
            this.saveToLocalStorage();
        });
    }

    /**
     * formatQuestion Format the email as a bot question. The subject line if formatted and combined with the email body to form the question.
     * @param email The email composed by player.
     * @returns Question Formatted bot question.
     */
    formatQuestion(email: EmailVM): Question {
        const question = new Question();
        question.question = 'SubjectLine:' + email.body;
        question.scoreThreshold = this.state.botScoreThreshold;
        question.RankerType = this.state.botRankerType;
        question.strictFilters = [];

        const strictFilter = new StrictFilter();
        strictFilter.name = "episode";
        strictFilter.value = `episode:${this.state.currentEpisode}`;
        question.strictFilters.push(strictFilter);

        return question;
    }

    /**
     * constructEmailSubject Strips the subject of any "re:"" text and formats the subject that is prepended to the email body to form the bot question.
     * @param subject The sent email subject.
     * @param emailAddress The "to" email address.
     * @returns string Formatted subject line, added to the bot subject.
     */
    constructEmailSubject(subject: string, name: string): string {
        const re = /RE: /gi;
        let newSubject = subject.replace(re, '');
        if (this.state.qualifySubjectWithToEmailAddress) {
            newSubject = 'SentTo:' + name.trim().toLowerCase() + 'SubjectLine:' + newSubject.trim().toLowerCase();
        } else {
            newSubject = 'SubjectLine:' + newSubject.trim().toLowerCase();
        }
        return newSubject;
    }

    showMailBox = (show: boolean) => {

        this.setState({
            showMailBox: show,
            email: new Email()
        });

    }

    /**
     * constructQuestion Construct the question to ask the bot.
     * @param body The email body.
     * @param subject The email subject.
     * @returns The question to ask the bot.
     */
    constructQuestion(body: string, subject: string): QuestionVM {
        var question = new Question();
        question.question = this.constructEmailSubject(body, subject);

        var strictFilter = new StrictFilter();
        strictFilter.name = "episode";
        strictFilter.value = `episode:${this.state.currentEpisode}`;
        question.strictFilters = [strictFilter];

        return question;
    }

    /**
     * clearLocalStorage Clear all stored email client data.
     * @returns n/a.
     */
    clearLocalStorage(): void {
        try {
            localStorage.removeItem('emailClient_currentEpisode');
            localStorage.removeItem('emailClient_inbox');
            localStorage.removeItem('emailClient_sentBox');
            console.log('Email client data cleared from local storage');
        } catch (error) {
            console.warn('Failed to clear local storage:', error);
        }
    }

    render() {
        // Render Mailbox options. //
        const renderMailboxOptions = () => {
            if (this.state.showMailboxOptions) {
                return (
                    <Fragment>
                        <Col sm={4} className={"bg-white"}>
                            {(!this.state.showEmailDetail && !this.state.showEmailForm) && (<Row className='mobile'>
                                <div className='bg-light btn-group w-100 px-4 py-3' role='group' aria-label='Mailboxes'>
                                    <button type='button' className={`btn shadow-sm ${this.state.activeList === 'inbox' ? 'bg-orange-darkest text-light' : 'bg-light'}`} onClick={this.showInbox}>Inbox</button>
                                    <button type='button' className={`btn shadow-sm ${this.state.activeList === 'sent' ? 'bg-orange-darkest text-light' : 'bg-light'}`} onClick={this.showSentItems}>Sent</button>
                                </div>
                            </Row>)}



                            <div className='desktop mt-3'>

                                <button type='button' className={`btn shadow-sm w-100 desktop-btn ${this.state.activeList === 'inbox' ? 'bg-orange-darkest text-light' : 'bg-light'}`} onClick={this.showInbox}>Inbox</button>
                                <button type='button' className={`btn shadow-sm w-100 desktop-btn ${this.state.activeList === 'sent' ? 'bg-orange-darkest text-light' : 'bg-light'}`} onClick={this.showSentItems}>Sent</button>

                            </div>
                        </Col>
                    </Fragment>
                );
            } else {
                return null;
            }
        };

        // Render Inbox.
        const renderInbox = () => {
            if (this.state.showInbox) {
                return (
                    <Fragment>
                        <Col sm={8} className="h-100 bg-light">
                            <Row className="align-items-center">
                                <Col><h1 className="mb-3 mt-3">Inbox</h1></Col>
                            </Row>
                            {renderSearchBar()}
                            {this.state.inbox?.length > 0 ? this.state.inbox.map((email, index) => {
                                return <Fragment key={email.id.toString() + index}>
                                    <Row className='g-0 mb-3 pb-3 border-bottom cursor-pointer' key={email.id.toString()} onClick={() => this.showEmailDetail(email, index, 'inbox')}>
                                        <Col xs sm={3} md={2} className='align-middle hak-emaillist-avatar flex-row align-items-center'>
                                            <span className={` mx-1 ${email.read ? 'hak-read' : 'hak-unread'}`}></span>
                                            {renderAvatar(email.emailFrom.avatar)}
                                        </Col>
                                        <Col className="hak-emaillist-desc">
                                            <h4 className="text-truncate mb-1 pr-1">{email.emailFrom.name}</h4>
                                            <div className="text-secondary text-truncate pr-1">{email.subject}</div>
                                        </Col>
                                        <div className='text-right text-secondary ch5'>
                                            {Utility.formatDate(email.received)}
                                            <span className='ml-1'>&gt;</span>
                                        </div>
                                    </Row>
                                </Fragment>;
                            }) : <Fragment>
                                <div className="p-2 text-secondary">Inbox Empty</div>
                            </Fragment>}
                        </Col>

                    </Fragment>
                );
            } else {
                return null;
            }
        };

        // Render sent items.
        const renderSentItems = () => {
            if (this.state.showSentItems) {
                return (


                    <Fragment>
                        <Col sm={8} className="h-100 bg-light">
                            <Row className=" align-items-center">
                                <Col><h1 className="mb-3 mt-3">Sent</h1></Col>
                            </Row>
                            {renderSearchBar()}
                            {this.state.sentBox?.length > 0 ? this.state.sentBox.map((email, index) => {
                                return <Fragment key={email.id.toString() + index}>
                                    <Row className='g-0 mb-3 pb-3 border-bottom' key={email.id.toString()} onClick={() => this.showEmailDetail(email, index, 'sent')}>
                                        <Col xs sm={3} md={2} className='align-items-center hak-emaillist-avatar'>
                                            <span className="hak-read"></span>
                                            {renderAvatar(email.emailTo.avatar)}
                                        </Col>
                                        <Col className="hak-emaillist-desc">
                                            <h4 className="text-truncate mb-1 pr-1">{email.emailTo.email}</h4>
                                            <div className="text-secondary text-truncate pr-1">{email.subject}</div>
                                        </Col>
                                        <div className='text-right text-secondary ch5'>
                                            {Utility.formatDate(email.sent)}
                                            <span className='ml-1'>&gt;</span>
                                        </div>
                                    </Row>
                                </Fragment>;
                            }) : <Fragment>
                                <div className="p-2 text-secondary">Sentbox Empty</div>
                            </Fragment>}
                        </Col>

                    </Fragment>




                );
            } else {
                return null;
            }
        };

        // Render compose email form.
        const renderEmailForm = () => {
            if (!this.state.showMailBox) {
                return (
                    <Fragment>
                        <Col sm={9} lg={9} xl={9} >
                            <Container fluid className="h-100">
                                <Form noValidate validated={this.state.emailFormIsValid} onSubmit={this.sendEmail} className="h-100">
                                    <Form.Group as={Row} controlId='firstname' className="align-items-center">
                                        <Col>
                                            <Form.Control plaintext placeholder={"FIRST NAME"} className="ch4 input-fields w-100 pb-1 mb-2" type='text' />
                                            <Form.Control.Feedback type='invalid'>
                                                Invalid First Name.
                                            </Form.Control.Feedback>
                                        </Col>
                                    </Form.Group>

                                    <Form.Group as={Row} controlId='lastname' className=" align-items-center">
                                        <Col>
                                            <Form.Control plaintext placeholder={"LAST NAME"} className="ch4 input-fields w-100 pb-1 mb-2" type='text' />
                                            <Form.Control.Feedback type='invalid'>
                                                Invalid Last Name.
                                            </Form.Control.Feedback>
                                        </Col>
                                    </Form.Group>
                                    <Form.Group as={Row} controlId='from' className="align-items-center">
                                        <Col>
                                            <Form.Control plaintext placeholder={"EMAIL"} className="ch4 input-fields w-100 pb-1 mb-2" type='email' required defaultValue={this.state.email.emailFrom.email} onChange={(ev: React.ChangeEvent<HTMLInputElement>): void => this.setFromInputValue(ev.target.value)} />
                                            <Form.Control.Feedback type='invalid'>
                                                Invalid email.
                                            </Form.Control.Feedback>
                                        </Col>
                                    </Form.Group>

                                    <Form.Group as={Row} controlId='body' className=" align-items-center ">
                                        <Col>
                                            <Form.Control placeholder={"MESSAGE"} className="ch4 input-fields w-100 h-25 pb-1 mb-2" as='textarea' required rows={5} plaintext autoFocus={true} onChange={(ev: React.ChangeEvent<HTMLInputElement>): void => this.setBodyInputValue(ev.target.value)} maxLength={this.state.maxLengthCharacters} />
                                            <Form.Control.Feedback type='invalid'>
                                                Please provide the message body.
                                            </Form.Control.Feedback>
                                        </Col>
                                    </Form.Group>
                                    <br />
                                    <div className={`${this.state.emailFormIsValid ? 'd-none' : ''}`}>
                                        <Alert variant='danger'>
                                            Please complete your email. All items are required and ensure the email address entered is a valid email.
                                        </Alert>
                                    </div>
                                    <br />
                                    <Row className="justify-content-center">
                                        <button type='submit' className="border-0 app-button mt-3 mb-5">Submit</button>
                                    </Row>
                                </Form>
                            </Container>
                        </Col>
                    </Fragment>
                );
            } else {
                return null;
            }
        };

        // Render email detail.
        const renderEmailDetail = () => {
            if (this.state.showEmailDetail) {
                return (
                    <Fragment>
                        <Col sm={8} className=" bg-light h-100">
                            <Container fluid className="h-100">
                                <Row className="justify-content-between">
                                    <button type='button' className='btn text-primary' onClick={this.goBackToList}>Back</button>
                                </Row>
                                <h2 className="mt-2 mb-3">{this.state.email.subject}</h2>
                                <Row className='g-0 mb-3 align-items-center' key={this.state.email.id.toString()}>
                                    <Col className='align-items-center d-flex flex-row'>
                                        {renderAvatar(this.state.email.emailFrom.avatar)}
                                        <h4 className="mb-0 text-truncate px-3">
                                            {this.state.email.received.length > 0 &&
                                                this.state.email.emailFrom.email
                                            }
                                            {this.state.email.received.length === 0 && this.state.email.sent.length > 0 &&
                                                this.state.email.emailTo.email
                                            }
                                        </h4>
                                    </Col>
                                    <div className='text-right text-secondary'  >
                                        {this.state.email.received.length > 0 &&
                                            Utility.formatDate(this.state.email.received)
                                        }
                                        {this.state.email.received.length === 0 && this.state.email.sent.length > 0 &&
                                            Utility.formatDate(this.state.email.sent)
                                        }
                                    </div>
                                </Row>
                                <div className='mb-4' dangerouslySetInnerHTML={{ __html: this.state.email.body }} />
                                {this.state.email.emailChain.map((email) => {
                                    return <Fragment key={email.id.toString()}>
                                        <div className={`${this.state.email.body === email.body ? 'd-none' : ''}`}>
                                            <hr className='hak-hr' />
                                            <Row className='g-0 mb-3 pb-3 align-top text-secondary' key={email.id.toString()}>
                                                {email.received.length > 0 &&
                                                    Utility.formatDate(email.received)
                                                }
                                                {email.received.length === 0 && email.sent.length > 0 &&
                                                    Utility.formatDate(email.sent)
                                                }
                                                <span className='ml-1 '>{email.emailFrom.email}</span>
                                            </Row>
                                            <div className='mb-3 border-left'>
                                                <div className='pl-3 text-secondary' dangerouslySetInnerHTML={{ __html: email.body }} />
                                            </div>
                                        </div>
                                    </Fragment>;
                                })}
                            </Container>
                        </Col>
                    </Fragment>
                );
            } else {
                return null;
            }
        };

        // Render search bar.
        const renderSearchBar = () => {
            return (
                <Form className='mb-3' noValidate onSubmit={(ev: React.ChangeEvent<HTMLFormElement>): void => ev.preventDefault()}>
                    <FormGroup >
                        <InputGroup>
                            <Form.Control type='text' className='shadow-sm form-control rounded-lg' aria-describedby='search' placeholder='Search' defaultValue={this.state.searchArgument} onChange={(ev: React.ChangeEvent<HTMLInputElement>): void => this.onSearchArgumentChange(ev.target.value)} />
                        </InputGroup>
                    </FormGroup>
                </Form>
            );
        };

        // Render Avatar.
        const renderAvatar = (avatar: string) => {

            if (avatar) {
                if (avatar.substring(0, 4) === '<svg') {
                    return (
                        <span dangerouslySetInnerHTML={{ __html: avatar }} />
                    );
                } else {
                    if (avatar.substring(0, 4) === 'http') {
                        return (
                            <img className='hak-avatar-img' alt='hak-avatar-img' src={avatar} />
                        );
                    } else {
                        return (
                            <img className='hak-avatar-img' alt='hak-avatar-img' src={'img/avatars/' + avatar} />
                        );
                    }
                }
            } else {
                return (
                    <img className='hak-avatar-img' alt='hak-avatar-img' src={'img/avatars/avatar.jpg'} />
                );
            }
        };

        // Render Email Sent Toast.
        const renderEmailSentToast = () => {
            if (this.state.showEmailSentToast) {
                return (
                    <Fragment>
                        <Container fluid className={"toast-message"}>
                            <Row>
                                <Col xs={12} className={"d-flex align-items-center justify-content-center"} >
                                    <Toast className='bg-dark pt-2 pb-0' autohide delay={3000} onClose={() => this.showEmailSentToast()}>
                                        <Toast.Body className="text-light text-center pb-0"><h4>Message Sent</h4>You will be automatically <br />returned to the Inbox.<br />
                                            <button className="btn text-info mt-2" onClick={this.showEmailSentToast}>Go to Inbox</button></Toast.Body>
                                    </Toast>
                                </Col>
                            </Row>
                        </Container>
                    </Fragment>
                );
            } else {
                return null;
            }
        };

        return (
            <React.Fragment>
                <Container fluid>
                    <Row className="h-100 d-flex flex-column align-items-center">
                        {renderEmailForm()}

                        <div onClick={() => this.showMailBox(true)}
                            className={`fab-mail shadow bg-orange align-items-center justify-content-center ${(!this.state.showMailBox) ? "d-flex" : "d-none"}`}>
                            <img src="/images/mail.png" alt="/images/mail.png" style={{ width: "28px" }}></img>
                            <span className={"text-dark font-weight-bold px-2"}>Mail Box</span>
                        </div>
                        {this.state.showMailBox ?
                            <div className={`mail-modal-bg w-100 h-100 p-4 d-flex}`}>
                                <div className={"br-5 bg-white d-flex flex-column w-100 h-100 shadow-lg"}>
                                    <div className="w-100 p-2 font-weight-bold bg-orange d-flex justify-content-between">
                                        <span>Mail Box</span>
                                        <img
                                            className={"cursor-pointer"}
                                            style={{ height: "15px", width: "15px" }}
                                            src={"/images/close.png"}
                                            alt={"close"}
                                            onClick={() => { this.showInbox(); this.showMailBox(false) }} />
                                    </div>
                                    <div className={"mail-box bg-light mail-box-mobile mail-box-desktop overflow-auto"}>

                                        {renderMailboxOptions()}

                                        {renderInbox()}

                                        {renderSentItems()}

                                        {renderEmailDetail()}

                                        {renderEmailSentToast()}
                                    </div>
                                </div>
                            </div> : null}
                    </Row>
                </Container>
                {this.state.errorMessage.length > 0 && <div className='alert alert-danger' role='alert'>
                    {this.state.errorMessage}
                </div>}
            </React.Fragment>
        );
    }
}
