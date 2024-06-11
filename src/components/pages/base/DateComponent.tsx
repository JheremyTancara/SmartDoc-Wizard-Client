import React, { Component } from 'react';
import { format } from 'date-fns';
import { es } from 'date-fns/locale';

class App extends Component<{}, { fechaActual: string }> {
  constructor(props: {}) {
    super(props);
    this.state = {
      fechaActual: ''
    };
  }

  componentDidMount() {
    const fecha = this.getFormattedDate();
    this.setState({ fechaActual: fecha });
  }

  getFormattedDate(): string {
    const now = new Date();
    return format(now, "d 'de' MMMM 'de' yyyy", { locale: es });
  }

  render() {
    return (
      <div>
        <h1>Mi Aplicación</h1>
        <p>Fecha actual: {this.state.fechaActual}</p>
      </div>
    );
  }
}

export default App;
