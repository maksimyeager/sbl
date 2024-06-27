import { Link, useLocation } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome } from '@fortawesome/free-solid-svg-icons';

const Breadcrumb = () => {
  const location = useLocation();
  const pathnames = location.pathname.split('/').filter(x => x);

  const routeNames = {
    'about-us': 'О нас',
    'our-projects': 'Наши проекты',
    'contacts': 'Контакты'
  };

  return (
    <nav>
      <ul className="breadcrumb">
        <li className="first">
          <Link to="/">
            <FontAwesomeIcon icon={faHome} />
          </Link>
        </li>
        {pathnames.map((value, index) => {
          const to = `/${pathnames.slice(0, index + 1).join('/')}`;
          return (
            <li key={to} className="last">
              <span>{routeNames[value] || value.charAt(0).toUpperCase() + value.slice(1)}</span>
            </li>
          );
        })}
      </ul>
    </nav>
  );
};

export default Breadcrumb;
