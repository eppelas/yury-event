import React, { useState, useEffect } from 'react';
import { X } from 'lucide-react';
import WotyPage from '../../src/components/WotyPage';
import DotPage from '../../src/components/DotPage';
import AsciiPage from '../../src/components/AsciiPage';
import ReportPage from '../../src/components/ReportPage';
import ConsultingPage from '../../src/components/ConsultingPage';
import OrganicJunglePage from '../../src/components/OrganicJunglePage';
import ZinePage from '../../src/components/ZinePage';
import CloudPage from '../../src/components/CloudPage';
import DeltaPage from '../../src/components/DeltaPage';
import ReceiptPage from '../../src/components/ReceiptPage';
import RetroOsPage from '../../src/components/RetroOsPage';
import EmergencePage from '../../src/components/EmergencePage';
import GlitchSplitPage from '../../src/components/GlitchSplitPage';
import LiquidDistortionPage from '../../src/components/LiquidDistortionPage';
import NeonBotanicalPage from '../../src/components/NeonBotanicalPage';
import SwissBrutalistPage from '../../src/components/SwissBrutalistPage';
import TypographicPosterPage from '../../src/components/TypographicPosterPage';
import InkBlotPage from '../../src/components/InkBlotPage';
import GalleryMinimalPage from '../../src/components/GalleryMinimalPage';
import CyberMotorsportPage from '../../src/components/CyberMotorsportPage';
import FlowerTypographyPage from '../../src/components/FlowerTypographyPage';
import AsciiGlassesPage from '../../src/components/AsciiGlassesPage';
import HandDrawnMapPage from '../../src/components/HandDrawnMapPage';
import IndustrialStudioPage from '../../src/components/IndustrialStudioPage';
import BlueVibePage from '../../src/components/BlueVibePage';
import KnitGroteskPage from '../../src/components/KnitGroteskPage';
import DiagonalGridPage from '../../src/components/DiagonalGridPage';
import DeepGlitchPage from '../../src/components/DeepGlitchPage';
import GeometricBrutalistPage from '../../src/components/GeometricBrutalistPage';
import CarDashboardPage from '../../src/components/CarDashboardPage';
import SwissInternationalPage from '../../src/components/SwissInternationalPage';
import ModernSerifPage from '../../src/components/ModernSerifPage';
import ExperimentalGridPage from '../../src/components/ExperimentalGridPage';
import SwissKineticPage from '../../src/components/SwissKineticPage';
import BoldDataPage from '../../src/components/BoldDataPage';
import VentionStylePage from '../../src/components/VentionStylePage';
import AfterimagePage from '../../src/components/AfterimagePage';
import GrittyCollagePage from '../../src/components/GrittyCollagePage';
import BrutalistScribblePage from '../../src/components/BrutalistScribblePage';
import PlayfulPortfolioPage from '../../src/components/PlayfulPortfolioPage';
import EditorialPortfolioPage from '../../src/components/EditorialPortfolioPage';
import SwissIdentityPage from '../../src/components/SwissIdentityPage';
import BoldPlayfulPage from '../../src/components/BoldPlayfulPage';
import BoldBrutalistPage from '../../src/components/BoldBrutalistPage';
import BlueEditorialPage from '../../src/components/BlueEditorialPage';
import FutureSystemPage from '../../src/components/FutureSystemPage';
import NeonMinimalPage from '../../src/components/NeonMinimalPage';
import BeigeTypoPage from '../../src/components/BeigeTypoPage';
import DeriveMapPage from '../../src/components/DeriveMapPage';
import SummitZ8Page from '../../src/components/SummitZ8Page';
import BlackOnBlackPage from '../../src/components/BlackOnBlackPage';
import PixelMusicForumPage from '../../src/components/PixelMusicForumPage';
import ProgrammableBitcoinPage from '../../src/components/ProgrammableBitcoinPage';
import GreyPortfolioPage from '../../src/components/GreyPortfolioPage';
import AiMindsetPage from '../../src/components/AiMindsetPage';
import DougAlvesStylePage from '../../src/components/DougAlvesStylePage';
import AbstractTypographyPage from '../../src/components/AbstractTypographyPage';
import TannerStylePage from '../../src/components/TannerStylePage';
import MinimalShapingPage from '../../src/components/MinimalShapingPage';
import KampongStylePage from '../../src/components/KampongStylePage';
import GimzStylePage from '../../src/components/GimzStylePage';
import FlammaStylePage from '../../src/components/FlammaStylePage';
import NonObjectivePage from '../../src/components/NonObjectivePage';
import InlocoStylePage from '../../src/components/InlocoStylePage';
import PaperCutoutPage from '../../src/components/PaperCutoutPage';
import MentalHealthFilmPage from '../../src/components/MentalHealthFilmPage';
import WavelengthDataPage from '../../src/components/WavelengthDataPage';
import DataArchPage from '../../src/components/DataArchPage';
import NeuralNetworkPage from '../../src/components/NeuralNetworkPage';
import TemporaryStudioPage from '../../src/components/TemporaryStudioPage';
import StudioArchivePage from '../../src/components/StudioArchivePage';
import AiMindsetTemporaryPage from '../../src/components/AiMindsetTemporaryPage';
import AiMindsetArchivePage from '../../src/components/AiMindsetArchivePage';
import AiMindsetTapePage from '../../src/components/AiMindsetTapePage';
import AiMindsetPublicPage from '../../src/components/AiMindsetPublicPage';
import AiMindsetEditorialPage from '../../src/components/AiMindsetEditorialPage';
import AiMindsetObysPage from '../../src/components/AiMindsetObysPage';
import AiMindsetMinimalPage from '../../src/components/AiMindsetMinimalPage';
import AiMindsetRectangularPage from '../../src/components/AiMindsetRectangularPage';
import AiMindsetYellowPage from '../../src/components/AiMindsetYellowPage';
import AiMindsetRedPage from '../../src/components/AiMindsetRedPage';
import AiMindsetCameraPage from '../../src/components/AiMindsetCameraPage';
import AiMindsetLensPage from '../../src/components/AiMindsetLensPage';
import AiMindsetAudioPage from '../../src/components/AiMindsetAudioPage';
import AiMindsetTanPage from '../../src/components/AiMindsetTanPage';
import AiMindsetChronakisPage from '../../src/components/AiMindsetChronakisPage';
import AiMindsetTypographyPage from '../../src/components/AiMindsetTypographyPage';
import AiMindsetSwissPage from '../../src/components/AiMindsetSwissPage';
import AiMindsetKarolinePage from '../../src/components/AiMindsetKarolinePage';
import AiMindsetKarolineRuPage from '../../src/components/AiMindsetKarolineRuPage';
import AiMindsetWireframePage from '../../src/components/AiMindsetWireframePage';
import AiMindsetGradientPage from '../../src/components/AiMindsetGradientPage';
import AiMindsetCleanEditorialPage from '../../src/components/AiMindsetCleanEditorialPage';
import AiMindsetPosRuPage from '../../src/components/AiMindsetPosRuPage';
import AiMindsetObysDarkPage from '../../src/components/AiMindsetObysDarkPage';
import AiMindsetRKDOPage from '../../src/components/AiMindsetRKDOPage';
import AiMindsetOrangeSwissPage from '../../src/components/AiMindsetOrangeSwissPage';
import AiMindsetLavenderFlowPage from '../../src/components/AiMindsetLavenderFlowPage';
import AiMindsetJamuPage from '../../src/components/AiMindsetJamuPage';
import AiMindsetSwissLinesPage from '../../src/components/AiMindsetSwissLinesPage';
import AiMindsetTypeChairsPage from '../../src/components/AiMindsetTypeChairsPage';
import AiMindsetClockGridPage from '../../src/components/AiMindsetClockGridPage';
import AiMindsetElephantPathPage from '../../src/components/AiMindsetElephantPathPage';
import AiMindsetStrategyPage from '../../src/components/AiMindsetStrategyPage';
import AiMindsetMinimalRuPage from '../../src/components/AiMindsetMinimalRu/AiMindsetMinimalRuPage';
import AiMindsetManifestPage from '../../src/components/AiMindsetManifestPage';
import AiMindsetBurgundyPage from '../../src/components/AiMindsetBurgundyPage';

export default function App() {
  const [pageIndex, setPageIndex] = useState(0);
  const pages = [
    <WotyPage key="woty" />,
    <DotPage key="dot" />,
    <AsciiPage key="ascii" />,
    <ReportPage key="report" />,
    <CloudPage key="cloud" />,
    <DeltaPage key="delta" />,
    <ReceiptPage key="receipt" />,
    <RetroOsPage key="retro" />,
    <GlitchSplitPage key="glitch" />,
    <NeonBotanicalPage key="neon" />,
    <SwissBrutalistPage key="swiss" />,
    <TypographicPosterPage key="typo" />,
    <AsciiGlassesPage key="glasses" />,
    <BlueVibePage key="blue" />,
    <KnitGroteskPage key="knit" />,
    <DiagonalGridPage key="diagonal" />,
    <DeepGlitchPage key="deep" />,
    <GeometricBrutalistPage key="geo" />,
    <SwissInternationalPage key="swiss-intl" />,
    <ExperimentalGridPage key="experimental" />,
    <SwissKineticPage key="kinetic" />,
    <BrutalistScribblePage key="scribble" />,
    <BoldPlayfulPage key="bold-playful" />,
    <FutureSystemPage key="future-system" />,
    <DeriveMapPage key="derive-map" />,
    <SummitZ8Page key="summit-z8" />,
    <PixelMusicForumPage key="pixel-music" />,
    <KampongStylePage key="kampong" />,
    <GimzStylePage key="gimz" />,
    <FlammaStylePage key="flamma" />,
    <NonObjectivePage key="non-objective" />,
    <PaperCutoutPage key="paper-cutout" />,
    <WavelengthDataPage key="wavelength" />,
    <DataArchPage key="data-arch" />,
    <NeuralNetworkPage key="neural" />,
    <TemporaryStudioPage key="temporary-studio" />,
    <AiMindsetTapePage key="ai-mindset-tape" />,
    <AiMindsetPublicPage key="ai-mindset-public" />,
    <AiMindsetObysPage key="ai-mindset-obys" />,
    <AiMindsetMinimalPage key="ai-mindset-minimal" />,
    <AiMindsetRectangularPage key="ai-mindset-rectangular" />,
    <AiMindsetYellowPage key="ai-mindset-yellow" />,
    <AiMindsetRedPage key="ai-mindset-red" />,
    <AiMindsetAudioPage key="ai-mindset-audio" />,
    <AiMindsetKarolineRuPage key="ai-mindset-karoline-ru" />,
    <AiMindsetWireframePage key="ai-mindset-wireframe" />,
    <AiMindsetGradientPage key="ai-mindset-gradient" />,
    <AiMindsetObysDarkPage key="ai-mindset-obys-dark" />,
    <AiMindsetOrangeSwissPage key="ai-mindset-orange-swiss" />,
    <AiMindsetJamuPage key="ai-mindset-jamu" />,
    <AiMindsetMinimalRuPage key="ai-mindset-minimal-ru" />,
    <AiMindsetManifestPage key="ai-mindset-manifest" />,
    <AiMindsetBurgundyPage key="ai-mindset-burgundy" />
  ];

  const [showIndex, setShowIndex] = useState(() => {
    if (typeof window === 'undefined') return false;
    const params = new URLSearchParams(window.location.search);
    return params.get('index') === '1' || window.location.hash === '#index';
  });

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'ArrowRight') {
        setPageIndex((prev) => (prev + 1) % pages.length);
      } else if (e.key === 'ArrowLeft') {
        setPageIndex((prev) => (prev - 1 + pages.length) % pages.length);
      } else if (e.key.toLowerCase() === 'i') {
        setShowIndex((prev) => !prev);
      } else if (e.key === 'Escape') {
        setShowIndex(false);
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [pages.length]);

  return (
    <div className="relative min-h-screen">
      {pages[pageIndex]}

      {showIndex && (
        <div className="fixed inset-0 z-[200] bg-black/95 backdrop-blur-md overflow-y-auto p-4 md:p-12 animate-in fade-in duration-200">
          <div className="max-w-7xl mx-auto">
            <div className="flex justify-between items-center mb-8">
              <h2 className="text-white text-3xl font-bold tracking-tight">Index</h2>
              <button
                onClick={() => setShowIndex(false)}
                className="p-2 text-white/70 hover:text-white hover:bg-white/10 rounded-full transition-colors"
              >
                <X size={32} />
              </button>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
              {pages.map((_, index) => (
                <button
                  key={index}
                  onClick={() => {
                    setPageIndex(index);
                    setShowIndex(false);
                  }}
                  className={`
                    aspect-square rounded-xl flex items-center justify-center text-3xl font-bold transition-all duration-200
                    ${pageIndex === index
                      ? 'bg-white text-black scale-105 shadow-[0_0_20px_rgba(255,255,255,0.3)]'
                      : 'bg-white/5 text-white/50 hover:bg-white/20 hover:text-white hover:scale-105'}
                  `}
                >
                  {index + 1}
                </button>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
