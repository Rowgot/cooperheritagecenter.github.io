import moment from 'moment';
import { ContentTagVM } from '../models/content-tag';
import { PlayerVM } from '../models/player';

export class Utility {
    static formatDate(dateTime: string) {
        if (moment(dateTime).isSame(moment(), 'day')) {
            let result: string;
            let theDateTime = moment(dateTime);
            // establish local date
            let now = moment();
            // time in seconds
            let delta = theDateTime.diff(now);
                // today
                if (delta < 86400) {
                    result = moment(dateTime).format('h:mm A');
                } else {
                    // over a day ago
                    result = moment(dateTime).format('MMM DD');
                }
            return result;
        } else {
            return moment(dateTime).format('MMM DD');
        }
    }

    /**
     * replaceAnswerTags Replace tags with values.
     * @param id Bot Id returned that indicates if bot replied with something relevant.
     * @param content Content to be processed.
     * @param player Player information.
     * @param contentTagReplacements Content tags and their replacements
     * @param noBotReplyOverride Content to use when bot cannot return a meaningful reply.
     * @returns string Content tags replaced with actual values.
     */
    static replaceAnswerTags(id: number, content: string, player: PlayerVM, contentTagReplacements: Array<ContentTagVM>, noBotReplyOverride: string): string {
        let formattedContent = content;
        if (id === -1) {
            formattedContent = noBotReplyOverride;
        }
        console.log(player);
        for (let contentTagReplacement of contentTagReplacements) {
            switch (contentTagReplacement.replacementType) {
                case 'literal':
                    const regEx = new RegExp(`${contentTagReplacement.tag}`, 'gi');
                    formattedContent = formattedContent.replace(regEx, contentTagReplacement.replacementValue);
                    break;
                case 'value':
                    // tslint:disable-next-line:no-eval
                    formattedContent = formattedContent.replace(contentTagReplacement.tag, eval(contentTagReplacement.replacementValue));
                    break;
                case 'function':
                    if (typeof contentTagReplacement.replacementValue === 'function') {
                        // possible future feature
                    }
                    break;
                default:
                    break;
            }
        }

        return formattedContent;
    }
}
