import { Product } from '@/store/useStore'

export const products: Product[] = [
  {
    id: '1',
    name: 'NEMA 17 Stepper Motor',
    description: 'High-torque stepper motor for precision motion control. Suitable for CNC machines, 3D printers, and robotics applications. 1.5A current, 42mm body size.',
    price_retail: 24.99,
    tiers: [
      { minQty: 10, maxQty: 49, price: 19.99 },
      { minQty: 50, maxQty: 99, price: 16.99 },
      { minQty: 100, maxQty: null, price: 13.99 }
    ],
    category: 'Motors',
    imageUrl: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400&h=400&fit=crop',
    inStock: true,
    sku: 'STM-NEMA17-01'
  },
  {
    id: '2',
    name: 'DC Brushless Motor 12V',
    description: 'High-efficiency brushless DC motor for drones, RC vehicles, and industrial fans. 1000KV rating, 50W power output.',
    price_retail: 34.99,
    tiers: [
      { minQty: 10, maxQty: 49, price: 28.99 },
      { minQty: 50, maxQty: 99, price: 24.99 },
      { minQty: 100, maxQty: null, price: 19.99 }
    ],
    category: 'Motors',
    imageUrl: 'https://images.unsplash.com/photo-1581092160562-40aa08e78837?w=400&h=400&fit=crop',
    inStock: true,
    sku: 'MOT-BLDC-12V'
  },
  {
    id: '3',
    name: 'Servo Motor MG996R',
    description: 'High-torque digital servo motor for robotics and RC applications. Metal gear, 180° rotation, torque up to 15kg/cm.',
    price_retail: 12.99,
    tiers: [
      { minQty: 10, maxQty: 49, price: 9.99 },
      { minQty: 50, maxQty: 99, price: 7.99 },
      { minQty: 100, maxQty: null, price: 5.99 }
    ],
    category: 'Motors',
    imageUrl: 'https://images.unsplash.com/photo-1567789884554-0b844b597180?w=400&h=400&fit=crop',
    inStock: true,
    sku: 'SRV-MG996R'
  },
  {
    id: '4',
    name: 'Copper Wire Set 22AWG',
    description: 'Premium copper wire set in 6 colors. 100 meters per roll, silicone insulation rated for high temperatures. Perfect for wiring and prototyping.',
    price_retail: 18.99,
    tiers: [
      { minQty: 10, maxQty: 49, price: 14.99 },
      { minQty: 50, maxQty: 99, price: 11.99 },
      { minQty: 100, maxQty: null, price: 8.99 }
    ],
    category: 'Wires',
    imageUrl: 'https://images.unsplash.com/photo-1605664040862-b1d301419203?w=400&h=400&fit=crop',
    inStock: true,
    sku: 'WIR-22AWG-SET'
  },
  {
    id: '5',
    name: 'Silicone Wire 18AWG',
    description: 'High-flexibility silicone wire for high-temperature applications. 5-meter length, various colors available. Rated 200°C.',
    price_retail: 8.99,
    tiers: [
      { minQty: 10, maxQty: 49, price: 6.99 },
      { minQty: 50, maxQty: 99, price: 4.99 },
      { minQty: 100, maxQty: null, price: 3.49 }
    ],
    category: 'Wires',
    imageUrl: 'https://images.unsplash.com/photo-1616440934379-5c9b42b2b8c8?w=400&h=400&fit=crop',
    inStock: true,
    sku: 'WIR-18AWG-SIL'
  },
  {
    id: '6',
    name: 'Ribbon Cable 20P',
    description: '20-pin IDC ribbon cable, 30cm length. Ideal for connecting PCBs, drives, and peripherals. Flat, flexible design.',
    price_retail: 4.99,
    tiers: [
      { minQty: 10, maxQty: 49, price: 3.49 },
      { minQty: 50, maxQty: 99, price: 2.49 },
      { minQty: 100, maxQty: null, price: 1.99 }
    ],
    category: 'Wires',
    imageUrl: 'https://images.unsplash.com/photo-1518770660439-4636190af475?w=400&h=400&fit=crop',
    inStock: true,
    sku: 'WIR-RIB-20P'
  },
  {
    id: '7',
    name: 'Resistor Kit 1/4W',
    description: 'Complete resistor kit with 170 values, 10 each. 0Ω to 10MΩ, 1% tolerance metal film. Essential for any electronics workbench.',
    price_retail: 29.99,
    tiers: [
      { minQty: 10, maxQty: 49, price: 24.99 },
      { minQty: 50, maxQty: 99, price: 19.99 },
      { minQty: 100, maxQty: null, price: 14.99 }
    ],
    category: 'Accessories',
    imageUrl: 'https://images.unsplash.com/photo-1563770095-39d468f95742?w=400&h=400&fit=crop',
    inStock: true,
    sku: 'RES-KIT-170'
  },
  {
    id: '8',
    name: 'LED Display Module',
    description: '8-digit 7-segment LED display with driver. I2C interface, red color, high brightness. For Arduino, Raspberry Pi projects.',
    price_retail: 9.99,
    tiers: [
      { minQty: 10, maxQty: 49, price: 7.99 },
      { minQty: 50, maxQty: 99, price: 5.99 },
      { minQty: 100, maxQty: null, price: 3.99 }
    ],
    category: 'Accessories',
    imageUrl: 'https://images.unsplash.com/photo-1517077304055-6e89abbf09b0?w=400&h=400&fit=crop',
    inStock: true,
    sku: 'LED-8DIG-I2C'
  },
  {
    id: '9',
    name: 'Capacitor Kit 100pcs',
    description: '100-piece ceramic capacitor kit. Values from 10pF to 10µF, 50V rating. Organized in plastic case.',
    price_retail: 14.99,
    tiers: [
      { minQty: 10, maxQty: 49, price: 11.99 },
      { minQty: 50, maxQty: 99, price: 8.99 },
      { minQty: 100, maxQty: null, price: 5.99 }
    ],
    category: 'Accessories',
    imageUrl: 'https://images.unsplash.com/photo-1555664424-778a1e5e1b48?w=400&h=400&fit=crop',
    inStock: true,
    sku: 'CAP-KIT-100'
  },
  {
    id: '10',
    name: 'Ultrasonic Sensor HC-SR04',
    description: 'Distance measuring sensor, 2cm-400cm range. 40kHz frequency, 15° beam angle. Perfect for obstacle detection.',
    price_retail: 5.99,
    tiers: [
      { minQty: 10, maxQty: 49, price: 4.49 },
      { minQty: 50, maxQty: 99, price: 3.29 },
      { minQty: 100, maxQty: null, price: 2.29 }
    ],
    category: 'Sensors',
    imageUrl: 'https://images.unsplash.com/photo-1600873169860-6c4c015c3aeb?w=400&h=400&fit=crop',
    inStock: true,
    sku: 'SEN-HCSR04'
  },
  {
    id: '11',
    name: 'Temperature Sensor DS18B20',
    description: 'Digital temperature sensor, -55°C to +125°C range. 1-wire interface, ±0.5°C accuracy. Waterproof version available.',
    price_retail: 6.99,
    tiers: [
      { minQty: 10, maxQty: 49, price: 5.49 },
      { minQty: 50, maxQty: 99, price: 3.99 },
      { minQty: 100, maxQty: null, price: 2.49 }
    ],
    category: 'Sensors',
    imageUrl: 'https://images.unsplash.com/photo-1558346490-a72e53ae2d4f?w=400&h=400&fit=crop',
    inStock: true,
    sku: 'SEN-DS18B20'
  },
  {
    id: '12',
    name: 'Arduino Compatible Board',
    description: 'ATmega328P based development board, 16MHz crystal. Fully compatible with Arduino IDE. USB-C interface.',
    price_retail: 22.99,
    tiers: [
      { minQty: 10, maxQty: 49, price: 18.99 },
      { minQty: 50, maxQty: 99, price: 14.99 },
      { minQty: 100, maxQty: null, price: 10.99 }
    ],
    category: 'Accessories',
    imageUrl: 'https://images.unsplash.com/photo-1608571423902-eed4a5ad8108?w=400&h=400&fit=crop',
    inStock: true,
    sku: 'DEV-ARDU-UNO'
  }
]

export function getProductById(id: string): Product | undefined {
  return products.find(p => p.id === id)
}

export function getProductsByCategory(category: string): Product[] {
  if (category === 'All') return products
  return products.filter(p => p.category === category)
}

export function searchProducts(query: string): Product[] {
  const lowerQuery = query.toLowerCase()
  return products.filter(p => 
    p.name.toLowerCase().includes(lowerQuery) ||
    p.description.toLowerCase().includes(lowerQuery) ||
    p.sku.toLowerCase().includes(lowerQuery)
  )
}