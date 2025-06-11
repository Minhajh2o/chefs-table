import WantToCook from '../want_to_cook/WantToCook';
import CurrentlyCooking from '../currently_cooking/CurrentlyCooking';

const SideBar = () => {
    return (
        <div>
            <h2>Side Bar</h2>
            <p>Links to other sections of the app can go here.</p>
            <WantToCook />
            <CurrentlyCooking />
        </div>
    );
};

export default SideBar;