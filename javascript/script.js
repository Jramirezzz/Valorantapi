data = [
    {
        "id": 18,
        "title": "Ascent",
        "category": {
            "id": 1,
        },
        "images": [
            "https://media.valorant-api.com/maps/7eaecc1b-4337-bbf6-6ab9-04b8f06b3319/splash.png"
        ]
    },
    {
        "id": 21,
        "title": "Split",
        "category": {
            "id": 5,
        },
        "images": [
            "https://media.valorant-api.com/maps/d960549e-485c-e861-8d71-aa9d1aed12a2/splash.png",
        ]
    },
    {
        "id": 22,
        "title": "Fracture",
        "category": {
            "id": 5,
        },
        "images": [
            "https://media.valorant-api.com/maps/b529448b-4d60-346e-e89e-00a4c527a405/splash.png"        ]
    },
    {
        "id": 24,
        "title": "Bind",
        "category": {
            "id": 3,
        },
        "images": [
            "https://media.valorant-api.com/maps/2c9d57ec-4431-9c5e-2939-8f9ef6dd5cba/splash.png",
        ]
    },
    {
        "id": 26,
        "title": "Breeze",
        "category": {
            "id": 3,
        },
        "images": [
            "https://media.valorant-api.com/maps/2fb9a4fd-47b8-4e7d-a969-74b4046ebd53/splash.png",
        ]
    },{
        "id": 28,
        "title": "Pearl",
        "category": {
            "id": 3,
        },
        "images": [
            "https://media.valorant-api.com/maps/fd267378-4d1d-484f-ff52-77821ed10dc2/splash.png",
        ]
    },{
        "id": 30,
        "title": "Icebox",
        "category": {
            "id": 3,
        },
        "images": [
            "https://media.valorant-api.com/maps/e2ad5c54-4114-a870-9641-8ea21279579a/splash.png",
        ]
    },
    {
        "id": 30,
        "title": "Heaven",
        "category": {
            "id": 3,
        },
        "images": [
            "https://media.valorant-api.com/maps/2bee0dc9-4ffe-519b-1cbd-7fbe763a6047/splash.png",
        ]
    }
]

const productsContainerDiv = document.getElementById("pcontainer")
var productListHtml = ""
// Create Product Class
class Product {
    constructor(id, title, images) {
        this.id = id
        this.title = title
        this.images = images
    }

    getFirstImage() {
        if (this.images.length > 0) {
            return this.images[0]
        } else {
            return "https://www.xgroup.com.co/wp-content/uploads/woocommerce-placeholder.png"
        }
    }
}

// Create HTML component for product
class ProductComponent {
    constructor(product, pos) {
        this.product = product
        this.pos = pos
    }

    toHtml() {
        return `
        <div class="product-card" onclick="productSelected(${this.pos}) onclick="OpenModal()">
            <a href="map.html"><img alt="product" width="120" height="120" 
            src="${this.product.getFirstImage()}" /></a>
            <div>
            </div>
        </div>
        `
    }
}

function parseMapToProduct(map) {
    return new Product(map.id, map.title, map.images)
}

function showAllProducts() {
    var i = 0
    data.forEach( productMap => {
        const product = parseMapToProduct(productMap)
        const productComponent = new ProductComponent(product, i)
        productsContainerDiv.innerHTML += productComponent.toHtml()
        i++
    });
}

showAllProducts()

function OpenModal() {
    let element = document.getElementById('overlay')
    element.style.display = 'block'
  }
  function CloseModal() {
    let element = document.getElementById('overlay')
    element.style.display = 'none'
  }