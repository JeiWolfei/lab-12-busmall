import SurveyChart from './survey-chart.js';
import html from './html.js';
import surveyApi from '../data-apis/survey-api.js';

function makeTemplate() {
    return html`
        <div class="app">
        <header>Insert header here</header>
        <main>
            <section class="report-survey"></section>
            <section class="user-report"></section>
        </main>
        </div>
    `;
}

export default class SurveyApp {
    constructor() {
        this.surveyData = surveyApi.getAll();
    }
    render() {
        const dom = makeTemplate();
        const chartSection = dom.querySelector('.report-survey');
        const surveyChart = new SurveyChart(this.surveyData);
        chartSection.appendChild(surveyChart.render());
        return dom;        
    }
}