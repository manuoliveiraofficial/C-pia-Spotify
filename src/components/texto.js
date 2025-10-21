import { Text } from 'react-native';

export default function Texto(props) {
    return(
        <Text style={props.style}  >{ props.text } </Text>
    );
}