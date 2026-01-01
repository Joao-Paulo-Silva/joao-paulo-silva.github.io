<script setup lang="ts">
    import { ref, onMounted } from 'vue'
    import { experience } from '@/constants/experience';

    const revealElements = ref<HTMLElement[]>([])

    onMounted(() => {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach((entry) => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
            });
        }, { threshold: 0.1 });

        revealElements.value.forEach((el) => {
            observer.observe(el);
        });
    });

    const setRef = (el: any) => {
        if (el) {
            revealElements.value.push(el);
        }
    };
</script>

<template>
    <section class="page section-page"  id="experience">
        <div class="header">
            <h2 class="title">Experiência</h2>
            <p class="subtitle">Minha trajetória acadêmica e profissional.</p>
        </div>

        <div class="timeline">
            <div v-for="(item, index) in experience"
                :key="item.id"
                class="timeline__item"
                :class="{ 'right': index % 2 !== 0 }"
                :ref="setRef"
            >
                <div class="timeline__item--content">
                    <span class="date">{{ item.date }}</span>
                    <h3 class="role">{{ item.role }}</h3>
                    <h4 class="company">{{ item.company }}</h4>
                    <p class="description">{{ item.description }}</p>
                    <div class="tags">
                        <span v-for="tag in item.tags" :key="tag" class="tag">{{ tag }}</span>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<style scoped lang="scss">
    .section-page {
        display: flex;
        flex-direction: column;
        position: relative;
        align-items: center;
        min-height: 100dvh;
        width: 100%;
        background-color: var(--bg-primary);
    }
    .header {
        text-align: center;
        margin-bottom: 2rem;
        margin-top: 1.5rem;
        .title {
            font-size: 3rem;
            font-weight: 800;
            color: var(--text-secondary);
            margin-bottom: 0.25rem;
        }

        .subtitle {
            font-size: 1.1rem;
            font-weight: 600;
            color: var(--color-primary);
        }
    }

    .timeline {
        position: relative;
        max-width: 100dvw;
        width: 100%;
        &::after {
            content: '';
            position: absolute;
            width: 0.25rem;
            background-color: var(--color-primary-glow);
            top: 0;
            left: 50%;
            margin-left: -0.15rem;
            border-radius: 0.15rem;
            box-shadow: 0 0 0.15rem var(--color-primary-glow);
            transition: background-color 0.3s ease;
            z-index: 1;
            height: 100%;
        }
        &hover::after {
            background-color: var(--color-secondary);
            border-color: var(--color-secondary);
        }
        &__item {
            padding: 1rem 2.5rem;
            position: relative;
            background-color: inherit;
            width: 50%;
            opacity: 0;
            transform: translateY(30px);
            transition: all 0.6s ease-out;
            &.visible {
                opacity: 1;
                transform: translateY(0);
            }
            &--content {
                padding: 2rem;
                background-color: var(--color-bg-secondary);
                border: 1px solid var(--color-border);
                border-radius: 0.75rem;
                position: relative;
                transition: transform 0.3s ease, border-color 0.3s ease;
                &:hover {
                    transform: translateY(-5px);
                    border-color: var(--color-primary);
                    box-shadow: 0 10px 30px rgba(0,0,0,0.3);
                }

                .date {
                    font-size: 0.9rem;
                    font-weight: 700;
                    color: var(--color-secondary);
                    display: block;
                    margin-bottom: 0.5rem;
                    text-transform: uppercase;
                    letter-spacing: 1px;
                }

                .role {
                    font-size: 1.5rem;
                    font-weight: 700;
                    color: var(--color-primary);
                    margin-bottom: 0.2rem;
                }

                .company {
                    font-size: 1rem;
                    font-weight: 600;
                    color: var(--text-secondary);
                    margin-bottom: 1rem;
                }

                .description {
                    color: var(--text-secondary);
                    line-height: 1.6;
                    margin-bottom: 1rem;
                }

                .tags {
                    display: flex;
                    flex-wrap: wrap;
                    gap: 0.5rem;
                    .tag {
                        background-color: rgba(112, 0, 255, 0.1);
                        color: var(--color-primary);
                        padding: 0.25rem 0.75rem;
                        border-radius: 1rem;
                        font-size: 0.8rem;
                        font-weight: 600;
                    }
                }
            }
            &.right {
                left: 50%;
                &::after {
                    left: -0.56rem;
                }
            }
            &::after {
                content: '';
                position: absolute;
                width: 1.15rem;
                height: 1.15rem;
                right: -0.56rem;
                background-color: var(--bg-primary);
                border: 0.25rem solid var(--color-primary);
                top: 1.15rem;
                border-radius: 50%;
                z-index: 1;
                box-shadow: 0 0 10px var(--color-primary-glow);
                transition: background-color 0.3s ease;
            }
        }
    }
</style>