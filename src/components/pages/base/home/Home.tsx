import '../../../../styles/colors/index.css';
import '../../../../styles/typography/index.css';
import '../../../../styles/widgets/index.css';
import Square from '../../compound/home/Square';
import Header from '../header/Header';
import Dates from '../../compound/home/Dates';

function Home() {

  const homeClassName = 'page-background'

  return (
    <div className={homeClassName}>
      <Header />
      <Dates />
      <Square />
    </div>
  );
}

export default Home;
