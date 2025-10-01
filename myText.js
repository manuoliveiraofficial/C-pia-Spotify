import { Text } from 'react-native';

export default function MyText(props) {
    return(
        <Text style={props.style}  >{ props.text } </Text>
    );
}