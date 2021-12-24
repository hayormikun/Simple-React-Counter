import Button from './Button';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const Header = ({ onAdd,title, showAdd }) => {
    return (
        <header className="header">
            <h1>{title}</h1>
           <Link to="/"> 
            <Button className="btn" text={showAdd ? 'Close': 'Add'} color={showAdd ? 'red':'green'} onClick={onAdd}/>
            </Link>
        </header>
    )
}

export default Header

Header.propTypes = {
    title: PropTypes.string,
    onClick: PropTypes.func,
}