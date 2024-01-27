import { useEffect, useState} from 'react'

export default function TypingText({ inputText }) {

    const [text, setText] = useState('');
    const [index, setIndex] = useState(0);


    const charArray = [...inputText];




    useEffect(() => {

        function updateText(){
            if (index < charArray.length) {
                setText(prevText => prevText + charArray[index]);
                setIndex(prevIndex => prevIndex +=1)
            }
        }

        const typeInterval = setInterval(() =>{
            updateText();

        }, [100])
        

        return () => {
            clearInterval(typeInterval)
    
        }

    }, [text, index])

    return (
        <>{text}</>

    )
}