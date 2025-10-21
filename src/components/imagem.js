import { Image } from 'react-native';

export default function Imagem(props) {
  return (
    <Image
      style={props.style}
      source={props.source}
    />
  );
}
