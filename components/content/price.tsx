import {Button} from '@radix-ui/themes';

const Price: React.FC = () => {
    return (
        <section className="bg-white dark:bg-gray-900 pt-8" id="price">
            <div className="py-8 px-0 mx-auto max-w-screen-xl lg:py-16 lg:px-2">
                <div className="mx-auto max-w-screen-md text-center mb-8 lg:mb-12">
                    <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white">Choose the
                        plan that suits your needs</h2>
                    <p className="mb-5 font-light text-gray-500 sm:text-xl dark:text-gray-400">Our plans are designed to
                        provide the best features at affordable prices.</p>
                </div>
                <div className="space-y-8 lg:grid lg:grid-cols-4 sm:gap-2 xl:gap-4 lg:space-y-0">
                    {/* Free Plan */}
                    <PlanCard
                        title="Free"
                        price="$0"
                        originalPrice=""
                        duration="/month"
                        features={[
                            "Generate Paragraphs: 1-2 at once",
                            "Paragraphs Limit: 6 paragraphs per day",
                            "Language: English",
                            "Speed: Fast",
                            "Tones: 3",
                            "Paragraph Rewrite: 3 per day",
                            "Modes: 2",
                            "Words Limit Per Generate: 300",
                            "Paragraph Summarize: 3 per day",
                            "Summary Length: Default",
                            "Paragraph Expand: 3 per day",
                            "Words Limit: Up to 200 words",
                            "Support: Basic",
                            "Ads & Captcha: Yes"
                        ]}
                        buttonText="Get started"
                    />
                    {/* Weekly Plan */}
                    <PlanCard
                        title="Weekly"
                        price="$4"
                        originalPrice=""
                        duration="/week"
                        features={[
                            "Generate Paragraphs: 1-5 at once",
                            "Paragraphs Limit: 50 paragraphs per week",
                            "Language: 5+",
                            "Speed: 2x faster",
                            "Tones: 5",
                            "Paragraph Rewrite: 10 per week",
                            "Modes: 4",
                            "Words Limit Per Generate: 600",
                            "Paragraph Summarize: 10 per week",
                            "Summary Length: Short, Medium",
                            "Paragraph Expand: 10 per week",
                            "Words Limit: Up to 500 words",
                            "Support: Priority",
                            "Ads & Captcha: No"
                        ]}
                        buttonText="Get started"
                    />
                    {/* Monthly Plan */}
                    <PlanCard
                        title="Monthly"
                        price="$8"
                        originalPrice="$16"
                        duration="/month"
                        features={[
                            "Generate Paragraphs: 1-5 at once",
                            "Paragraphs Limit: Unlimited",
                            "Language: 14+",
                            "Speed: 3x faster",
                            "Tones: 13+",
                            "Paragraph Rewrite: Unlimited",
                            "Modes: 8+",
                            "Search Mode included: Yes",
                            "Words Limit Per Generate: 1500+",
                            "Paragraph Summarize: Unlimited",
                            "Summary Length: Short, Medium, Long",
                            "Paragraph Expand: Unlimited",
                            "Words Limit: Unlimited",
                            "Support: 24x7",
                            "Ads & Captcha: No"
                        ]}
                        buttonText="Get started"
                    />
                    {/* Yearly Plan */}
                    <PlanCard
                        title="Yearly"
                        price="$68"
                        originalPrice="$192"
                        duration="/year"
                        features={[
                            "Generate Paragraphs: 1-5 at once",
                            "Paragraphs Limit: Unlimited",
                            "Language: 14+",
                            "Speed: 3x faster",
                            "Tones: 13+",
                            "Paragraph Rewrite: Unlimited",
                            "Modes: 8+",
                            "Search Mode included: Yes",
                            "Words Limit Per Generate: 1500+",
                            "Paragraph Summarize: Unlimited",
                            "Summary Length: Short, Medium, Long",
                            "Paragraph Expand: Unlimited",
                            "Words Limit: Unlimited",
                            "Support: 24x7",
                            "Ads & Captcha: No"
                        ]}
                        buttonText="Get started"
                    />
                </div>
            </div>
        </section>
    );
};

const PlanCard: React.FC<{
    title: string,
    price: string,
    originalPrice: string,
    duration: string,
    features: string[],
    buttonText: string
}> = ({title, price, originalPrice, duration, features, buttonText}) => {
    return (
        <div
            className="flex flex-col p-3 mx-auto max-w-lg text-center text-gray-900 bg-white rounded-lg border border-gray-100 shadow dark:border-gray-600 xl:p-4 dark:bg-gray-800 dark:text-white">
            <h3 className="mb-4 text-2xl font-semibold">{title}</h3>
            <div className="flex justify-center items-baseline my-8">
                {originalPrice && (
                    <span
                        className="text-gray-500 dark:text-gray-400 line-through mr-1">{originalPrice}</span>
                )}
                <span className="mr-2 text-5xl font-extrabold">{price}</span>
                <span className="text-gray-500 dark:text-gray-400">{duration}</span>
            </div>
            <Button size="3" asChild><a href="#">{buttonText}</a></Button>
            <ul role="list" className="mt-8 space-y-1 text-left text-xs">
                {features.map((feature, index) => (
                    <li key={index} className="flex items-center space-x-3">
                        <svg className="flex-shrink-0 w-5 h-5 text-green-500 dark:text-green-400" fill="currentColor"
                             viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                            <path fillRule="evenodd"
                                  d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                                  clipRule="evenodd"></path>
                        </svg>
                        <span>{feature}</span>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default Price;
