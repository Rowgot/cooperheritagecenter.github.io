import { Component } from 'react'
import 'react-perfect-scrollbar/dist/css/styles.css';
import store from 'store';
import EmailClient from '../components/EmailClient/email-client';
import { Container } from 'react-bootstrap';

export default class Inbox extends Component<any, any> {
    public currentSeasonIndex: any;
    public currentEpisodeIndex: any;
    public subject: any;

    constructor(props: any) {
        super(props);

        this.currentSeasonIndex = this.props.currentSeason
        this.currentEpisodeIndex = this.props.currentEpisode
        this.subject = ""

        const userEmail = store.get("userEmailBW");

        this.state = {
            showEmailClient: true,
            userEmail: userEmail,
        };
    }

    handleBotEmailResponse = (botResponse : any) => {
        if(botResponse)
        {
            console.log('correct');
            console.log(botResponse);
        }
    }

    render() {       
         const renderEmailClient = () => {
            if (this.state.showEmailClient) {
                const initialEmailSubject = this.subject;
                const configurationLocation = '/config/config.json';
                return <EmailClient
                    initialEmailSubject={initialEmailSubject}
                    configurationLocation={configurationLocation}
                    botEmailResponse={this.handleBotEmailResponse}
                    currentEpisode={this.currentEpisodeIndex}
                />;
            }
            return null;
        };

        return (
            <Container className="d-flex flex-column w-100">
                <div className="modalcontainer inboxcontainer w-full h-full">
                    <div className="w-full h-full">
                        {renderEmailClient()}
                    </div>
                </div>
            </Container>
        )
    }
}
