import { Progress, ProgressWrapper } from "./ProgressBar.styles";


type ProgressBarProps = {
    progress: number;
    total: number;
    isSelected?: boolean;
}
export default function ProgressBar({ progress, total, isSelected }: ProgressBarProps) {
  return (
    <ProgressWrapper isSelected={isSelected}>
      <Progress style={{ width: `${(progress / total) * 100}%` }} />
    </ProgressWrapper>
  )
}
