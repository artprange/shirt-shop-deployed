import { styled } from ".."

export const HomeContainer = styled('main', {
    display: 'flex',
    // gap: '4.8rem',
    width: '100%',
    maxWidth: 'calc(100vw - ((100vw - 1180px) / 2))',
    marginLeft: 'auto',
    minHeight: 656,
})

export const Product = styled('div', {
    background: 'transparent',
    borderRadius: 8,
    // padding: '0.4rem',
    cursor: 'pointer',
    position: 'relative',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    overflow: 'hidden',

    img: {
        objectFit: 'cover',
        borderRadius: '8px'
    },

    footer: {
        position: 'absolute',
        bottom: '0.4rem',
        left: '0.4rem',
        right: '0.4rem',
        padding: '3.2rem',
        borderRadius: 6,

        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        transform: 'translateY(110%)',
        opacity: 0,
        transition: 'all 0.2s ease-in-out',
        backgroundColor: 'rgba(0, 0, 0, 0.6)',


        'strong': {
            fontSize: '$lg',
            color: '$gray100',
        },

        span: {
            fontSize: '$xl',
            fontWeight: 'bold',
            color: '$green300',
        },
    },

    '&:hover': {
        footer: {
            transform: 'translateY(0%)',
            opacity: 1,
        }
    }
})