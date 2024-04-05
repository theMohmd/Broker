import AdCardList from "components/AdCardList/AdCardList";
import Pagination from "components/ui/Pagination";

const Home = () => {
    return (
        <div className="container flex flex-col items-center grow">
            <AdCardList />
            <div className="flex justify-center items-center grow">
                <Pagination />
            </div>
        </div>
    );
};

export default Home;
