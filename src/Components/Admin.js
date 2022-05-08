import '../Style/main.css';
import { Link} from 'react-router-dom';
function Admin() {
    return (
            <div className="header">
                <nav className="navbar navbar-expand-lg navbar-dark">
                    <ul className="navbar-nav mr-auto">
                        <li className="nav-item">
                            <Link to='/Login/create' className='nav-link'>Create</Link>
                        </li>
                        <li className="nav-item">
                            <Link to='/Login/index' className='nav-link'>Index</Link>
                        </li>
                    </ul>
                </nav>
            </div>
    );
}

export default Admin;