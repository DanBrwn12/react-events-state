import { Component } from 'react';
import Toolbar from './Toolbar';
import ProjectList from './ProjectList';
import { projects } from '../data/projects';

const filters = ['All', 'Websites', 'Flayers', 'Business Cards'];

class Portfolio extends Component {
  state = {
    selectedFilter: 'All',
  };

  handleSelectFilter = (filter) => {
    this.setState({
      selectedFilter: filter,
    });
  };

  render() {
    const selectedFilter = this.state.selectedFilter;

    const visibleProjects =
      selectedFilter === 'All'
        ? projects
        : projects.filter((project) => project.category === selectedFilter);

    return (
      <main className="portfolio">
        <Toolbar
          filters={filters}
          selected={selectedFilter}
          onSelectFilter={this.handleSelectFilter}
        />

        <ProjectList projects={visibleProjects} />
      </main>
    );
  }
}

export default Portfolio;
