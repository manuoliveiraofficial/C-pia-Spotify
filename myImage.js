import { Image } from 'react-native';

export default function MyImage(props) {
  return (
    <Image
      style={props.style}
      source={require('./logo.png')}
    />
  );
}
