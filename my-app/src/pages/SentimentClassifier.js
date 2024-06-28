import Twitter from "../images/twitter.png";
import Graph from "../images/sentiment.png";


export default function Sentiment() {
    return (
        <div className="container pl-20 pr-20">
            <br></br>
            <br></br>
            <br></br>
            <h1 className="text-6xl">Tweet Sentiment Trading</h1>
            <br className="space-y-8"></br>
            <br className="space-y-8"></br>
            <article className="content text-md">
                <h3 className="text-3xl">Summary:</h3>
                <br className="space-y-8"></br>
                {/* <iframe width="560" height="315" src="https://www.youtube.com/embed/GSpHw8jqjdk" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe> */}
                <br className="space-y-8"></br>
                <p>
                    A sentiment analysis trading strategy was developed to test the viability of making trades based on data collected from tweets. 
                </p>
                <br className="space-y-8"></br>
                <p>The project involved gathering and cleaning tweets using <strong>Tweepy</strong> for data collection, <strong>Pandas</strong> for data manipulation, and <strong>NLTK</strong> for text processing.</p>
                <br className="space-y-8"></br>
                <p> A machine learning model, leveraging <strong>Scikit-learn</strong>, was trained to predict market sentiment from the processed tweet data. </p>
                <br className="space-y-8"></br>
                <p>This model then made trades based on the sentiment analysis.</p>
                <br className="space-y-8"></br>
                <p>
                    The strategy was backtested over a year, demonstrating significant promise with a return of <strong>38%</strong>, outperforming the S&P 500 by 2.53 times.
                </p>
                <br className="space-y-8"></br>
                <p>
                    We started with 100,000 dollars and over the course of the testing as shown below we have made a huge profit. 
                </p>
                <br class="space-y-2"></br>

                <h4 className="font-semibold">Team members: Hayun Jung, Henry Liu </h4>
                {/* <br className="space-y-3"></br> */}
{/* 
                <br className="space-y-2"></br> */}

                <img src={Graph} className="inline-photo"></img>
            </article>

        </div>
    )
}