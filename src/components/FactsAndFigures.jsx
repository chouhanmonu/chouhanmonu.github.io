import {
  ArrowTrendingUpIcon,
  BoltIcon,
  CodeBracketIcon,
  CubeIcon,
} from "@heroicons/react/24/outline";

export default function FactsAndFigures() {
  return (
    <div className="flex gap-4 max-md:flex-wrap max-md:justify-center">
      <div className="basis-1/4 text-center border border-primary-950 rounded-md flex items-center justify-center flex-col p-5 bg-primary-950/15 gap-3 max-md:basis-[47.5%] max-sm:basis-full light:bg-primary-50 light:border-primary-700">
        <div className="rounded-full p-3 bg-primary-950/50 text-primary-200 light:bg-primary-100 light:text-primary-700">
          <CubeIcon strokeWidth={2} width={20} />
        </div>
        <div className="text-3xl font-bold tracking-tight font-heading ">
          25+
        </div>
        <div className="text-gray-300 light:text-gray-600">Technologies</div>
      </div>
      <div className="basis-1/4 text-center border border-primary-950 rounded-md flex items-center justify-center flex-col p-5 bg-primary-950/15 gap-3 max-md:basis-[47.5%] max-sm:basis-full light:bg-primary-50 light:border-primary-700">
        <div className="rounded-full p-3 bg-primary-950/50 text-primary-200 light:bg-primary-100 light:text-primary-700">
          <CodeBracketIcon strokeWidth={2} width={20} />
        </div>
        <div className="text-3xl font-bold tracking-tight font-heading ">
          50+
        </div>
        <div className="text-gray-300 light:text-gray-600">Total Projects</div>
      </div>
      <div className="basis-1/4 text-center border border-primary-950 rounded-md flex items-center justify-center flex-col p-5 bg-primary-950/15 gap-3 max-md:basis-[47.5%] max-sm:basis-full light:bg-primary-50 light:border-primary-700">
        <div className="rounded-full p-3 bg-primary-950/50 text-primary-200 light:bg-primary-100 light:text-primary-700">
          <ArrowTrendingUpIcon strokeWidth={2} width={20} />
        </div>
        <div className="text-3xl font-bold tracking-tight font-heading ">
          4+
        </div>
        <div className="text-gray-300 light:text-gray-600">
          Years of Experience
        </div>
      </div>
      <div className="basis-1/4 text-center border border-primary-950 rounded-md flex items-center justify-center flex-col p-5 bg-primary-950/15 gap-3 max-md:basis-[47.5%] max-sm:basis-full light:bg-primary-50 light:border-primary-700">
        <div className="rounded-full p-3 bg-primary-950/50 text-primary-200 light:bg-primary-100 light:text-primary-700">
          <BoltIcon strokeWidth={2} width={20} />
        </div>
        <div className="text-3xl font-bold tracking-tight font-heading ">
          3+
        </div>
        <div className="text-gray-300 light:text-gray-600">Certifications</div>
      </div>
    </div>
  );
}
