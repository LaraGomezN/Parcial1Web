


export default function Menu() {
    const [menu, setMenu] = useState([]);
    const [selectedSport, setSelectedSport] = useState(null);

    useEffect(() => {
        const URL = "https://my.api.mockaroo.com/users2.json?key=a32b4ea0";
        fetch(URL)
            .then((data) => data.json())
            .then((data) => {
                setSports(data);
            });
    }, []);

    return (
        <div>
            <h1>Menu</h1>
        </div>
    )
}