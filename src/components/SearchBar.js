import React from "react";

class SearchBar extends React.Component {

    state = {term: ""}

    onInputChange = (e) => {
       this.setState({term: e.target.value})
    }

    onFormSubmit = (e) => {
        e.preventDefault();
        this.props.onFormSubmit(this.state.term)
        //TODO: callback API from parent element
    }
    render(){
        return (
            <div className="search-bar ui segment">
                <form onSubmit={this.onFormSubmit} className="ui form">
                    <div className="field">
                        <label>Youtube Search</label>
                        <input 
                            type="text" 
                            value={this.state.term} 
                            onChange={this.onInputChange}
                            placeholder="Search any videos" 
                        />
                    </div>
                </form>
            </div>
        )
    }
}

export default SearchBar