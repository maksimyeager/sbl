import { Link, useLocation } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome } from '@fortawesome/free-solid-svg-icons';
import { useTranslation } from 'react-i18next';

const Breadcrumb = () => {
  const { t } = useTranslation("global");
  const location = useLocation();
  const pathnames = location.pathname.split('/').filter(x => x);

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
              <span>{t(`breadcrumbs.${value}`)}</span>
            </li>
          );
        })}
      </ul>
    </nav>
  );
};

export default Breadcrumb;
