'use client';

import React, { useState } from 'react';
import Container from '../Container';
import Eyebrow from '../Eyebrow';

export const CALC_RATE_CARD = [
  { label: 'Air Conditioner', rates: { '1 Year': 8.5, '2 Years': 13, '3 Years': 17 } },
  { label: 'Dishwasher / Dryer / Refrigerator / Washing Machine / Microwave', rates: { '1 Year': 8, '2 Years': 12, '3 Years': 16, '4 Years': 20 } },
  { label: 'Refrigerator & Washing Machine (Brand Warranty > 1 year)', rates: { '1 Year': 9, '2 Years': 14 } },
  { label: 'Television', rates: { '1 Year': 8.5, '2 Years': 12, '3 Years': 17 } },
  { label: 'Television (Brand Warranty > 1 year)', rates: { '1 Year': 10, '2 Years': 14 } },
  { label: 'Air & Water Purifier', rates: { '1 Year': 8, '2 Years': 12, '3 Years': 16 } },
  { label: 'Hob & Chimney', rates: { '1 Year': 9, '2 Years': 14 } },
  { label: 'Room Cooler / Heater / Atta Chakki / Water Dispenser / Geyser', rates: { '1 Year': 8, '2 Years': 12 } },
  { label: 'Personal Care / Massager / Vacuum Cleaner / Fan / Iron', rates: { '1 Year': 9, '2 Years': 14 } },
  { label: 'Chopper / Blender / Kettle / Toaster / Fryer / Griller / Food Processor / JMG / Induction Stove', rates: { '1 Year': 9, '2 Years': 14 } },
  { label: 'Home Theatre / Sound Bar / Audio System / Portable Speakers', rates: { '1 Year': 8.5, '2 Years': 12 } },
  { label: 'Bluetooth — Speakers / Neckband / Headphones', rates: { '1 Year': 12 } },
  { label: 'Laptop', rates: { '1 Year': 7, '2 Years': 9, '3 Years': 12 } },
  { label: 'Desktop / Printer / Office Solution', rates: { '1 Year': 7, '2 Years': 10 } },
];

const MAX_DEVICE_VALUE = 2000000; // ₹20 lakh

export default function WarrantyCalculator() {
  const [product, setProduct] = useState('');
  const [deviceValue, setDeviceValue] = useState('');

  const selected = CALC_RATE_CARD.find((r) => r.label === product);
  const numVal = parseFloat(deviceValue.replace(/,/g, ''));
  const isValid = selected && !isNaN(numVal) && numVal > 0 && numVal <= MAX_DEVICE_VALUE;

  const fmt = (n: number) =>
    new Intl.NumberFormat('en-IN', { style: 'currency', currency: 'INR', maximumFractionDigits: 0 }).format(n);

  return (
    <section id="calculator" className="scroll-mt-24 py-24 sm:py-32 relative bg-canvas">
      <Container size="wide">
        <div className="mb-14 max-w-[680px]">
          <Eyebrow code="CALCULATOR">CALCULATOR</Eyebrow>
          <h2 className="mb-3 text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-text-navy tracking-tight">
            Calculate Your{' '}
            <span className="serif-italic-accent">Warranty Price</span>
          </h2>
          <p className="text-base sm:text-lg text-text-body leading-relaxed max-w-xl">
            Select your product category, enter the device purchase price, and instantly see the warranty cost for each plan.
          </p>
        </div>

        <div className="glass-card bg-white/80 rounded-3xl p-7 sm:p-10 lg:p-12 border border-white/95 shadow-glass-lg">
          <div className="grid grid-cols-1 gap-10 lg:grid-cols-2">
            {/* Inputs */}
            <div className="flex flex-col gap-6">
              {/* Product dropdown */}
              <div>
                <label
                  htmlFor="wc-product"
                  className="mb-2.5 block font-mono text-xs font-bold uppercase tracking-wider text-text-navy"
                >
                  Product Category
                </label>
                <div className="relative">
                  <select
                    id="wc-product"
                    value={product}
                    onChange={(e) => setProduct(e.target.value)}
                    className="w-full appearance-none rounded-2xl border border-navy/15 bg-white px-5 py-4 text-sm sm:text-base text-slate-900 shadow-sm outline-none transition focus:border-teal-500 focus:ring-4 focus:ring-teal-500/15 cursor-pointer"
                  >
                    <option value="">— Select a product —</option>
                    {CALC_RATE_CARD.map((r) => (
                      <option key={r.label} value={r.label}>
                        {r.label}
                      </option>
                    ))}
                  </select>
                  <span className="pointer-events-none absolute right-5 top-1/2 -translate-y-1/2 text-xs text-text-muted">
                    ▼
                  </span>
                </div>
              </div>

              {/* Device value input */}
              <div>
                <label
                  htmlFor="wc-value"
                  className="mb-2.5 block font-mono text-xs font-bold uppercase tracking-wider text-text-navy"
                >
                  Device Purchase Price (₹)
                </label>
                <input
                  id="wc-value"
                  type="number"
                  min="1"
                  max="2000000"
                  placeholder="e.g. 50000"
                  value={deviceValue}
                  onChange={(e) => setDeviceValue(e.target.value)}
                  className="w-full rounded-2xl border border-navy/15 bg-white px-5 py-4 text-sm sm:text-base text-slate-900 shadow-sm outline-none transition focus:border-teal-500 focus:ring-4 focus:ring-teal-500/15"
                />
                <p className="mt-2 font-mono text-xs text-text-muted">
                  Maximum device price: ₹20,00,000
                </p>
                {numVal > MAX_DEVICE_VALUE && (
                  <p className="mt-2 font-mono text-xs font-semibold text-red-500">
                    ⚠️ Plan not available above ₹20 Lakh
                  </p>
                )}
              </div>
            </div>

            {/* Results */}
            <div className="flex flex-col justify-center">
              {!isValid && (
                <div className="flex h-full min-h-[240px] flex-col items-center justify-center rounded-2xl border-2 border-dashed border-navy/15 bg-white/40 p-8 text-center text-text-muted">
                  <span className="mb-3 text-4xl">🧮</span>
                  <p className="text-sm sm:text-base font-medium">
                    Select a product and enter device value<br />to see your warranty price.
                  </p>
                </div>
              )}
              {isValid && (
                <div className="flex flex-col gap-3.5">
                  <p className="mb-1 font-mono text-xs font-bold uppercase tracking-wider text-text-navy">
                    Estimated Warranty Cost
                  </p>
                  {Object.entries(selected.rates).map(([duration, rate]) => {
                    const cost = (numVal * (rate as number)) / 100;
                    return (
                      <div
                        key={duration}
                        className="flex items-center justify-between rounded-2xl border border-white/95 bg-white/90 px-6 py-4 shadow-sm hover:shadow-md transition-shadow"
                      >
                        <div>
                          <p className="text-sm sm:text-base font-bold text-text-navy">
                            {duration} Plan
                          </p>
                          <p className="font-mono text-xs text-teal-700 font-semibold">
                            {rate}% of device value
                          </p>
                        </div>
                        <p className="font-serif text-2xl font-bold text-text-navy">
                          {fmt(cost)}
                        </p>
                      </div>
                    );
                  })}
                  <p className="mt-2 font-mono text-[0.72rem] text-text-muted">
                    *Prices are indicative. Final price may vary. GST &amp; taxes extra.
                  </p>
                </div>
              )}
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
