import PropTypes from 'prop-types';

const Helmet = (props) => {
  document.title = 'Food ordering app -' + props.title

  return(
    <div className="w-100">{props.children}</div>
  )
}

Helmet.propTypes = {
  children: PropTypes.node, // ou qualquer outro tipo adequado
  title: PropTypes.node
  // outros tipos de propriedades...
}

export default Helmet;