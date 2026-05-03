import { createFileRoute } from "@tanstack/react-router";
import Design01 from "@/components/designs/design-01";
import Design02 from "@/components/designs/design-02";
import Design03 from "@/components/designs/design-03";
import Design04 from "@/components/designs/design-04";
import Design05 from "@/components/designs/design-05";
import Design06 from "@/components/designs/design-06";
import Design07 from "@/components/designs/design-07";
import Design08 from "@/components/designs/design-08";
import Design09 from "@/components/designs/design-09";
import Design10 from "@/components/designs/design-10";
import Design11 from "@/components/designs/design-11";
import Design12 from "@/components/designs/design-12";
import Design13 from "@/components/designs/design-13";
import Design14 from "@/components/designs/design-14";
import Design15 from "@/components/designs/design-15";
import Design16 from "@/components/designs/design-16";
import Design17 from "@/components/designs/design-17";
import Design18 from "@/components/designs/design-18";
import Design19 from "@/components/designs/design-19";
import Design20 from "@/components/designs/design-20";
import Design21 from "@/components/designs/design-21";
import Design22 from "@/components/designs/design-22";
import Design23 from "@/components/designs/design-23";
import Design24 from "@/components/designs/design-24";
import Design25 from "@/components/designs/design-25";
import Design26 from "@/components/designs/design-26";
import Design27 from "@/components/designs/design-27";
import Design28 from "@/components/designs/design-28";
import Design29 from "@/components/designs/design-29";
import Design30 from "@/components/designs/design-30";
import Design31 from "@/components/designs/design-31";
import Design32 from "@/components/designs/design-32";
import Design33 from "@/components/designs/design-33";
import Design34 from "@/components/designs/design-34";
import Design35 from "@/components/designs/design-35";
import Cursor from "@/components/cursor";
import { designsMeta } from "@/config/designs";

const designs: Record<string, React.ComponentType> = {
  "1": Design01,
  "2": Design02,
  "3": Design03,
  "4": Design04,
  "5": Design05,
  "6": Design06,
  "7": Design07,
  "8": Design08,
  "9": Design09,
  "10": Design10,
  "11": Design11,
  "12": Design12,
  "13": Design13,
  "14": Design14,
  "15": Design15,
  "16": Design16,
  "17": Design17,
  "18": Design18,
  "19": Design19,
  "20": Design20,
  "21": Design21,
  "22": Design22,
  "23": Design23,
  "24": Design24,
  "25": Design25,
  "26": Design26,
  "27": Design27,
  "28": Design28,
  "29": Design29,
  "30": Design30,
  "31": Design31,
  "32": Design32,
  "33": Design33,
  "34": Design34,
  "35": Design35,
};

export const Route = createFileRoute("/$id")({
  component: DesignPage,
});

function DesignPage() {
  const { id } = Route.useParams();
  const Component = designs[id];
  const meta = designsMeta.find((d) => d.id === Number(id));

  if (!Component || !meta) {
    return <div>Design not found</div>;
  }

  return (
    <div key={id} className="animate__animated animate__fadeIn animate__faster">
      <Cursor dotColor={meta.primary} outlineColor={meta.text} />
      <Component />
    </div>
  );
}