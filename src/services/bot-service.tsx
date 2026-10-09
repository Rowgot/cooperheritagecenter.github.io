import { Question } from '../models/question';
/**
 * Bot service
 *
 * Overview: Provides Bot related services
 *
 */

export class BotService {

    /**
     * Calls bot API to ask question.
     * @param question Model housing bot question API model
     * @param episodeKey Current episode key
     * @returns Status 200 if returned
     */
    askQuestion(question: Question, episodeKey: string) {
        return new Promise((resolve, reject) => {
            const headers = {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            };
            
            fetch('https://chathak.netlify.app/api/qa', {
                method: 'POST',
                body: JSON.stringify({ 
                    question: question.question, 
                    episode: episodeKey, 
                    cta: true,
                    game: 'EF3'
                }),
                headers,
                mode: 'cors'
            }).then((response) => {
                if (response.ok) {
                    return resolve(response);
                } else {
                    return reject(response);
                }
            });
        });
    }
}
