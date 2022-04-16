import img1 from './images/xWZMNYm.jpg';
import img2 from './images/Screenshot 2022-04-16 094747.png';

const Content = () => {
    return (
        <div className="content">
            <img className="img1" src={img1} alt="" />
            <div className="info">
                <img classNmae="img2" src={img2} alt="" />
            </div>
        </div>
    );
};

export default Content;
