// Definición de la clase Rack
class Rack {
  constructor() {
    this.items = []; // Array para almacenar los elementos en el rack
  }

  // Método para agregar un elemento al rack
  addItem(item) {
    this.items.push(item);
    console.log(`${item} ha sido agregado al rack.`);
  }

  // Método para quitar un elemento del rack
  removeItem(item) {
    const index = this.items.indexOf(item);
    if (index !== -1) {
      this.items.splice(index, 1);
      console.log(`${item} ha sido removido del rack.`);
    } else {
      console.log(`${item} no existe en el rack.`);
    }
  }

  // Método para mostrar todos los elementos en el rack
  displayItems() {
    console.log('Elementos en el rack:');
    this.items.forEach(item => {
      console.log(item);
    });
  }
}

// Crear una instancia de Rack
const myRack = new Rack();

// Agregar algunos elementos al rack
myRack.addItem('Libro 1');
myRack.addItem('Libro 2');
myRack.addItem('Libro 3');

// Mostrar los elementos actuales en el rack
myRack.displayItems();

// Remover un elemento del rack
myRack.removeItem('Libro 2');

// Mostrar los elementos actualizados en el rack
myRack.displayItems();
