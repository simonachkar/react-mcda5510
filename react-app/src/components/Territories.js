import territories from '../data/territories-data'
import Province from "./Province"

const Territories = () => (
    <div>
        {territories.map(territory => {
            return (
                <Province key={territory.name} name={territory.name} capital={territory.capital} flagUrl={territory.flagUrl} />
            )
        }
        )}
    </div>
)

export default Territories;