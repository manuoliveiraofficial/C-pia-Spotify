import { Button } from 'react-native';

export default function button(props) {
    return(
        <Button title="Sing in" style={ props.style } onPress={()=> alert('Hi!')}/>
 
    );
}