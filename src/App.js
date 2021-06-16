import { useEffect } from "react";
import { connect } from "react-redux";
import { getCountries } from "./actions";
import "./App.css";

const App = (props) => {
  useEffect(() => {
    props.getCountries();
  }, []);
  return (
    <div className="App">
      <h1>React Dersleri</h1>
      <h2>Redux-Thunk</h2>
      {props.isLoading ? (
        <p>...Loading....</p>
      ) : (
        props.countries.map((country) => {
          return (
            <div key={country.name}>
              <h3>{country.name}</h3>
              <h4>{country.capital}</h4>
              <p>
                <img
                  src={country.flag}
                  alt={country.name}
                  style={{ width: "100px" }}
                />
              </p>
            </div>
          );
        })
      )}
    </div>
  );
};

const mapStateToProps = (state) => {
  return { countries: state.countries, isLoading: state.isLoading };
};
export default connect(mapStateToProps, { getCountries })(App);
