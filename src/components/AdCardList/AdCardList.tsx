import AdCard from "components/AdCardList/AdCard";

const AdCardList = () => {
    return (
        <div
            className="
            overflow-auto
            grid auto-rows-min grid-flow-row-dense
            grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4
            gap-2 p-4
            max-h-[84dvh]
            "
        >
            <AdCard />
            <AdCard />
            <AdCard />
            <AdCard />
            <AdCard />
            <AdCard />
            <AdCard />
            <AdCard />
            <AdCard />
            <AdCard />
            <AdCard />
            <AdCard />
            <AdCard />
            <AdCard />
        </div>
    );
};

export default AdCardList;
