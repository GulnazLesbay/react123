import React, { useState, useRef } from 'react';
import PropTypes from 'prop-types';

const Tooltip = ({ text, position, children }) => {
    const [isVisible, setIsVisible] = useState(false);
    const tooltipRef = useRef(null);

    const handleMouseEnter = () => {
        setIsVisible(true);
    };

    const handleMouseLeave = () => {
        setIsVisible(false);
    };

    const calculatePosition = (triggerRect, tooltipRect) => {
        const { top, left, width, height } = triggerRect;
        let topPos, leftPos;

        switch (position) {
            case 'top':
                topPos = top - tooltipRect.height;
                leftPos = left + width / 2 - tooltipRect.width / 2;
                break;
            case 'right':
                topPos = top + height / 2 - tooltipRect.height / 2;
                leftPos = left + width;
                break;
            case 'left':
                topPos = top + height / 2 - tooltipRect.height / 2;
                leftPos = left - tooltipRect.width;
                break;
            case 'bottom':
                topPos = top + height;
                leftPos = left + width / 2 - tooltipRect.width / 2;
                break;
            default:
                topPos = top - tooltipRect.height;
                leftPos = left + width / 2 - tooltipRect.width / 2;
        }

        return { top: topPos, left: leftPos };
    };

    const handleMouseMove = (e) => {
        const tooltipNode = tooltipRef.current;
        if (!tooltipNode) return; // Добавляем проверку на существование элемента
        const triggerRect = e.target.getBoundingClientRect();
        const tooltipRect = tooltipNode.getBoundingClientRect();
        const newPosition = calculatePosition(triggerRect, tooltipRect);
        tooltipNode.style.top = `${newPosition.top}px`;
        tooltipNode.style.left = `${newPosition.left}px`;
    };


    return (
        <div
            className="tooltip-wrapper"
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            onMouseMove={handleMouseMove}
        >
            {children}
            {isVisible && (
                <div
                    className={`tooltip tooltip-${position}`}
                    ref={tooltipRef}
                >
                    {text}
                </div>
            )}
        </div>
    );
};

Tooltip.propTypes = {
    text: PropTypes.string.isRequired,
    position: PropTypes.oneOf(['top', 'right', 'bottom', 'left']),
    children: PropTypes.node.isRequired,
};

Tooltip.defaultProps = {
    position: 'top',
};

export default Tooltip;
