import filtros from './filtros.json';
// import Styles from './Filtros.modules.scss';

export default function Filtros() {
  return (
    <div>
      {filtros.map(option => (
        <button key={option.id}></button>
      ))}
    </div>
  );
}
