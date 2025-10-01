import { TextInput } from 'react-native';

export default function MyInput(props) {
    return(
        <TextInput 
        style={props.style} 
        placeholder={props.placeholder} 
      />
    );
}