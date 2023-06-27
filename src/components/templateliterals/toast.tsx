// Position Prop - left/right-center | left/center/right-top | left/right/center-bottom | center

type HorizontalPosition = 'left' | 'center' | 'right'
type VerticalPosition = 'top' | 'center' | 'bottom'

type ToastProps = {
    position: Exclude<`${HorizontalPosition}-${VerticalPosition}`, 'center-center'> | 'center'
}

export const Toast = ({position}: ToastProps) => {
    return <div>Toast Notification Position - {position}</div>
}