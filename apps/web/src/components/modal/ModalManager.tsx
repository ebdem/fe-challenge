import * as React from "react";


export interface ModalManagerChildProps {
    showModal: () => void;
    hideModal: () => void;
    visible: boolean;
}

interface ModalManagerProps {
    children: (props: ModalManagerChildProps) => React.ReactNode;
}

interface ModalManagerState {
    visible: boolean;
}

class ModalManager extends React.Component<
    ModalManagerProps,
    ModalManagerState
> {
    public state = {
        visible: false
    };

    public render() {
        const { children } = this.props;
        const { visible } = this.state;
        const { showModal, hideModal } = this;
        return (
            <React.Fragment>
                {children({ visible, showModal, hideModal })}
            </React.Fragment>
        );
    }

    private showModal = () => {
        this.setState({
            visible: true
        });
    };

    private hideModal = () => {
        this.setState({
            visible: false
        });
    };
}

export default ModalManager;
