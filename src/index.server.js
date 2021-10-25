import ReactDOMServer from 'react-dom/server';
const html = ReactDOMServer.renderToString(
    <div>Hello SErver Side rendering!</div>
);
console.log(html);
