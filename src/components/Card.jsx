
import PropTypes from 'prop-types'
function Card( {title, picture}) {
     return (
        <a href='Logement/1'  style={{ display: 'flex', flexDirection: 'column', padding: 15 }}>
            <span >{title}</span>
            <img src={picture} alt="card" height={200} width={200}/>
        </a>
     )
  
}
 
Card.propTypes = {
    title: PropTypes.string,
    picture: PropTypes.string,
}
export default Card