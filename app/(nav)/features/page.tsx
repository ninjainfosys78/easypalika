"use client";

import { Fragment } from 'react';
import { Header } from '@/components/header';
import Footer from '@/components/footer';
import { useLanguage } from '@/context/LanguageContext';
import Demo from '@/components/demo';
import { featuresRailData } from '@/lib/featuresRailData';
import Reveal from '@/components/animation/Reveal';
import { getStaggerDelay } from '@/components/animation/stagger';

const GRID_COLUMNS = 5;

export default function FeaturesPage() {
    const { t } = useLanguage();

    return (
        <Fragment>
            <Header />
            <main className="bg-white min-h-screen">
                <section className="w-full py-12 md:py-16" style={{ backgroundColor: '#eefbf9' }}>
                    <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
                        <Reveal direction="up">
                            <h2 className="text-[28px] font-bold mb-4 text-black">
                                {t({
                                    en: "Simplifying local governance through a smart, connected digital platform.",
                                    ne: "स्मार्ट, जडित डिजिटल प्लेटफर्ममार्फत स्थानीय शासनलाई सरल बनाउँदै।"
                                })}
                            </h2>
                            <div className="w-24 h-[2px] mx-auto mb-8" style={{ backgroundColor: '#0f766e' }}></div>
                        </Reveal>

                        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 items-start">
                            {featuresRailData.map((feature, index) => (
                                <Reveal
                                    key={feature.id}
                                    direction="up"
                                    delay={getStaggerDelay(index, GRID_COLUMNS)}
                                    className="flex flex-col items-center text-center md:items-start md:text-left"
                                >
                                    <div className="w-full overflow-hidden bg-white">
                                        <div className="w-full h-40 sm:h-44 md:aspect-square">
                                            <img
                                                src={feature.image}
                                                alt={t(feature.description)}
                                                className="w-full h-full object-cover"
                                                draggable={false}
                                            />
                                        </div>
                                    </div>
                                    <div className="w-16 h-[2px] mt-3 mb-2" style={{ backgroundColor: '#0f766e' }}></div>
                                    <p className="text-sm text-black leading-relaxed">
                                        {t(feature.description)}
                                    </p>
                                </Reveal>
                            ))}
                        </div>
                    </div>
                </section>
                <Demo />
            </main>
            <Footer />
        </Fragment>
    );
}