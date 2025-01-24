import ReactMarkdown from 'react-markdown';

export default function RecipeCode(props){
    return (
        <section aria-live='polite'>
            <h2>Chef Claude Recommends: </h2>
            <ReactMarkdown>{props.recipe}</ReactMarkdown>
        </section>
    )
}

