import { useRef } from 'react';

export function MyInput() {

    const ref = useRef("");
    let x = " Hallo Welt mMyInput Komponete let x Text "
    function doMyEvent(event){
        ref.current = event.target.value
        console.log("Ev happeneh" + event.target.value)
        x = event.target.value

        //Span organisieren und reinschreiben
        const my_span =event.target.nextElementSibling
        my_span.innerHTML = event.target.value
    }

    return (<div>
        <label htmlFor="site-search">Suche folgenden Text:</label>
        <input
            type="search"
            id="customInput"
            name="q"
            placeholder="search"
            onChange={doMyEvent}
             />

        <span></span>

        {x} {ref.current} </div>);
}

export default MyInput;
