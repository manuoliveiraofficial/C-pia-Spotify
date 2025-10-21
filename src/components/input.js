import { TextInput } from 'react-native';

export default function input(props) {
    return(
        <TextInput 
        style={props.style} 
        placeholder={props.placeholder} 
      />
    );
}