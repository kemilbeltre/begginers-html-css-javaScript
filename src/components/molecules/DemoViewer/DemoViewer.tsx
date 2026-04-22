import type { ComponentType } from "react";

import { MonitorPlay } from "lucide-react";

interface DemoViewerProps {
  title: string;
  borderColor: string;
  DemoComponent: ComponentType;
}

export const DemoViewer = ({ title, borderColor, DemoComponent }: DemoViewerProps) => (
  <div className={`p-6 rounded-xl border ${borderColor} bg-opacity-10`}>
    <h3 className="text-lg font-bold mb-4 flex items-center gap-2">
      <MonitorPlay className="w-5 h-5" />
      {title}
    </h3>
    <div className="bg-white p-6 rounded-lg shadow-inner">
      <DemoComponent />
    </div>
  </div>
);
