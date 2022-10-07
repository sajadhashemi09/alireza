const dictionary = new Map();

dictionary.set("a", 1).set("b", 2).set("c", 3);

console.log(dictionary.size);
console.log(dictionary.get());
console.log([...dictionary.keys()]);
console.log([...dictionary.values()]);
console.log([...dictionary.entries()]);

class SuperMap {
    #map = {};
    #size = 0;
  
    constructor() {}
  
    set(key, value) {
      this.#map[key] = value;
      this.#size++;
      
      return this;
    }
    
    get(key) {
      return this.#map[key];
    }
    
    delete(key) {
      delete this.#map[key];
      this.#size--;
  
      return this;
    }
  
    get size() {
      return this.#size;
    }
    clear(){
        this.#map = {};
        return this;
    }
    has(key){
        return this.#map.hasOwnProperty(key);
    }
    keys(){
        return [...Object.keys(this.#map)];
    }
    values(){
        return [...Object.values(this.#map)];
    }
    entries(){
        let array = [];
        for (const key in this.#map) {
            let value = this.#map[key];
            array.push([key,value]);
        }
        return array;
    }
    forEach(callback){
        this.keys().forEach(key => {
            const value = this.#map[key];
            callback(value , key);
        })
    }
  }
  
  const ownMap = new SuperMap();
  
  ownMap.set("a", 1)
    .set("b", 2)
    .set("c", 3)
    .set("d", 4)
    .set("e", 5);
  console.log(ownMap.size);
  ownMap.delete("a").delete("b").delete("c");
  console.log(ownMap.size);
  console.log(ownMap.get("a"))
  console.log(ownMap.keys("b"))
  console.log(ownMap.entries("c"))
  console.log(ownMap.values("d"))
  console.log(ownMap.has("e"))
  console.log(ownMap.get("f"))