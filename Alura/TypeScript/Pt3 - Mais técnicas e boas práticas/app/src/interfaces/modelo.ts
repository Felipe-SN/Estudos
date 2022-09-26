import Comparavel from './comparavel';
import Imprimivel from './imprimivel';

interface Modelo<T> extends Imprimivel, Comparavel<T> {}

export default Modelo;
