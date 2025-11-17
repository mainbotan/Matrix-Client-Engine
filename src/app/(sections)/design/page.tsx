'use client';

import Arrow from '@/assets/ui-kit/icons/arrow';
import styles from './page.module.scss';
import Container from "@/app/components/container/container";
import clsx from 'clsx';
import Button from '@/assets/ui-kit/button/button';
import Input from '@/assets/ui-kit/input/input';
import Select from '@/assets/ui-kit/select/select';
import Spinner from '@/assets/ui-kit/spinner/spinner';

export default function Page() {
    return (
        <>
        <div className={styles.container}>
            <div className={styles.focus}>
                <div className={styles.component}>
                    <div className={styles.grid}>
                        <div className={styles.section}>
                            <div className={styles.el}>
                                <Button className={styles.button} variant='default' size='lg' >Выбрать</Button>
                            </div>
                            <div className={styles.el}>
                                <Button className={styles.button} variant='default'>Выбрать</Button>
                            </div>
                            <div className={styles.el}>
                                <Button className={styles.button} variant='default' size='sm'>Выбрать</Button>
                            </div>
                            <div className={styles.el}>
                                <Button className={styles.button} variant='default' fullWidth>Выбрать</Button>
                            </div>
                            <span className={styles.flag}>variant: default</span>
                        </div>
                        <div className={styles.section}>
                            <div className={styles.el}>
                                <Button className={styles.button} variant='leader' size='lg' >Выбрать</Button>
                            </div>
                            <div className={styles.el}>
                                <Button className={styles.button} variant='leader'>Выбрать</Button>
                            </div>
                            <div className={styles.el}>
                                <Button className={styles.button} variant='leader' size='sm'>Выбрать</Button>
                            </div>
                            <div className={styles.el}>
                                <Button className={styles.button} variant='leader' fullWidth>Выбрать</Button>
                            </div>
                            <span className={styles.flag}>variant: leader</span>
                        </div>
                        <div className={styles.section}>
                            <div className={styles.el}>
                                <Button className={styles.button} variant='contrast' size='lg' >Выбрать</Button>
                            </div>
                            <div className={styles.el}>
                                <Button className={styles.button} variant='contrast'>Выбрать</Button>
                            </div>
                            <div className={styles.el}>
                                <Button className={styles.button} variant='contrast' size='sm'>Выбрать</Button>
                            </div>
                            <div className={styles.el}>
                                <Button className={styles.button} variant='contrast' fullWidth>Выбрать</Button>
                            </div>
                            <span className={styles.flag}>variant: contrast</span>
                        </div>
                        <div className={styles.section}>
                            <div className={styles.el}>
                                <Button className={styles.button} variant='elevated' size='lg' >Выбрать</Button>
                            </div>
                            <div className={styles.el}>
                                <Button className={styles.button} variant='elevated'>Выбрать</Button>
                            </div>
                            <div className={styles.el}>
                                <Button className={styles.button} variant='elevated' size='sm'>Выбрать</Button>
                            </div>
                            <div className={styles.el}>
                                <Button className={styles.button} variant='elevated' fullWidth>Выбрать</Button>
                            </div>
                            <span className={styles.flag}>variant: elevated</span>
                        </div>
                        <section className={styles.section}>
                            <div className={styles.el}>
                                <Button className={styles.button} variant='empty' size='lg' >Выбрать</Button>
                            </div>
                            <div className={styles.el}>
                                <Button className={styles.button} variant='empty'>Выбрать</Button>
                            </div>
                            <div className={styles.el}>
                                <Button className={styles.button} variant='empty' size='sm'>Выбрать</Button>
                            </div>
                            <div className={styles.el}>
                                <Button className={styles.button} variant='empty' fullWidth>Выбрать</Button>
                            </div>
                            <span className={styles.flag}>variant: empty</span>
                        </section>
                        <section className={styles.section}>
                            <div className={styles.el}>
                                <Button className={styles.button} variant='glass' size='lg' >Выбрать</Button>
                            </div>
                            <div className={styles.el}>
                                <Button className={styles.button} variant='glass'>Выбрать</Button>
                            </div>
                            <div className={styles.el}>
                                <Button className={styles.button} variant='glass' size='sm'>Выбрать</Button>
                            </div>
                            <div className={styles.el}>
                                <Button className={styles.button} variant='glass' fullWidth>Выбрать</Button>
                            </div>
                            <span className={styles.flag}>variant: glass</span>
                        </section>
                        <section className={styles.section}>
                            <div className={styles.el}>
                                <Button className={styles.button} variant='accent' size='lg' >Выбрать</Button>
                            </div>
                            <div className={styles.el}>
                                <Button className={styles.button} variant='accent'>Выбрать</Button>
                            </div>
                            <div className={styles.el}>
                                <Button className={styles.button} variant='accent' size='sm'>Выбрать</Button>
                            </div>
                            <div className={styles.el}>
                                <Button className={styles.button} variant='accent' fullWidth>Выбрать</Button>
                            </div>
                            <span className={styles.flag}>variant: accent</span>
                        </section>
                        <section className={styles.section}>
                            <div className={styles.el}>
                                <Button className={styles.button} variant='brand' size='lg' >Выбрать</Button>
                            </div>
                            <div className={styles.el}>
                                <Button className={styles.button} variant='brand'>Выбрать</Button>
                            </div>
                            <div className={styles.el}>
                                <Button className={styles.button} variant='brand' size='sm'>Выбрать</Button>
                            </div>
                            <div className={styles.el}>
                                <Button className={styles.button} variant='brand' fullWidth>Выбрать</Button>
                            </div>
                            <span className={styles.flag}>variant: brand</span>
                        </section>
                    </div>
                </div>
                <div className={styles.component}>
                    <div className={styles.grid}>
                        <div className={styles.section}>
                            <div className={styles.el}>
                                <Input className={styles.button} variant='default' size='lg' placeholder='Написать' />
                            </div>
                            <div className={styles.el}>
                                <Input className={styles.button} variant='default' placeholder='Написать' />
                            </div>
                            <div className={styles.el}>
                                <Input className={styles.button} variant='default' size='sm' placeholder='Написать' />
                            </div>
                            <div className={styles.el}>
                                <Input className={styles.button} variant='default' placeholder='Написать' fullWidth />
                            </div>
                            <span className={styles.flag}>variant: default</span>
                        </div>
                        <div className={styles.section}>
                            <div className={styles.el}>
                                <Input className={styles.button} variant='leader' size='lg' placeholder='Написать' />
                            </div>
                            <div className={styles.el}>
                                <Input className={styles.button} variant='leader' placeholder='Написать' />
                            </div>
                            <div className={styles.el}>
                                <Input className={styles.button} variant='leader' size='sm' placeholder='Написать' />
                            </div>
                            <div className={styles.el}>
                                <Input className={styles.button} variant='leader' placeholder='Написать' fullWidth />
                            </div>
                            <span className={styles.flag}>variant: leader</span>
                        </div>
                        <div className={styles.section}>
                            <div className={styles.el}>
                                <Input className={styles.button} variant='contrast' size='lg' placeholder='Написать' />
                            </div>
                            <div className={styles.el}>
                                <Input className={styles.button} variant='contrast' placeholder='Написать' />
                            </div>
                            <div className={styles.el}>
                                <Input className={styles.button} variant='contrast' size='sm' placeholder='Написать' />
                            </div>
                            <div className={styles.el}>
                                <Input className={styles.button} variant='contrast' placeholder='Написать' fullWidth />
                            </div>
                            <span className={styles.flag}>variant: contrast</span>
                        </div>
                        <div className={styles.section}>
                            <div className={styles.el}>
                                <Input className={styles.button} variant='elevated' size='lg' placeholder='Написать' />
                            </div>
                            <div className={styles.el}>
                                <Input className={styles.button} variant='elevated' placeholder='Написать' />
                            </div>
                            <div className={styles.el}>
                                <Input className={styles.button} variant='elevated' size='sm' placeholder='Написать' />
                            </div>
                            <div className={styles.el}>
                                <Input className={styles.button} variant='elevated' placeholder='Написать' fullWidth />
                            </div>
                            <span className={styles.flag}>variant: elevated</span>
                        </div>
                        <div className={styles.section}>
                            <div className={styles.el}>
                                <Input className={styles.button} variant='empty' size='lg' placeholder='Написать' />
                            </div>
                            <div className={styles.el}>
                                <Input className={styles.button} variant='empty' placeholder='Написать' />
                            </div>
                            <div className={styles.el}>
                                <Input className={styles.button} variant='empty' size='sm' placeholder='Написать' />
                            </div>
                            <div className={styles.el}>
                                <Input className={styles.button} variant='empty' placeholder='Написать' fullWidth />
                            </div>
                            <span className={styles.flag}>variant: empty</span>
                        </div>
                        <div className={styles.section}>
                            <div className={styles.el}>
                                <Input className={styles.button} variant='glass' size='lg' placeholder='Написать' />
                            </div>
                            <div className={styles.el}>
                                <Input className={styles.button} variant='glass' placeholder='Написать' />
                            </div>
                            <div className={styles.el}>
                                <Input className={styles.button} variant='glass' size='sm' placeholder='Написать' />
                            </div>
                            <div className={styles.el}>
                                <Input className={styles.button} variant='glass' placeholder='Написать' fullWidth />
                            </div>
                            <span className={styles.flag}>variant: glass</span>
                        </div>
                    </div>
                </div>
                <div className={styles.component}>
                    <div className={styles.grid}>
                        <div className={styles.section}>
                            <div className={styles.el}>
                                <Select
                                    options={[
                                        { value: '1', label: 'Option 1' },
                                        { value: '2', label: 'Option 2' },
                                    ]}
                                    placeholder="Select option"
                                    variant="default"
                                    size="bg"
                                    onChange={(value) => console.log(value)}
                                    fullWidth
                                />
                            </div>
                            <div className={styles.el}>
                                <Select
                                    options={[
                                        { value: '1', label: 'Option 1' },
                                        { value: '2', label: 'Option 2' },
                                    ]}
                                    placeholder="Select option"
                                    variant="default"
                                    size="md"
                                    onChange={(value) => console.log(value)}
                                    fullWidth
                                />
                            </div>
                            <div className={styles.el}>
                                <Select
                                    options={[
                                        { value: '1', label: 'Option 1' },
                                        { value: '2', label: 'Option 2' },
                                    ]}
                                    placeholder="Select option"
                                    variant="default"
                                    size="sm"
                                    onChange={(value) => console.log(value)}
                                    fullWidth
                                />
                            </div>
                            <div className={styles.el}>
                                <Select
                                    options={[
                                        { value: '1', label: 'Option 1' },
                                        { value: '2', label: 'Option 2' },
                                    ]}
                                    placeholder="Select option"
                                    variant="default"
                                    size="md"
                                    onChange={(value) => console.log(value)}
                                    error
                                    fullWidth
                                />
                            </div>
                            <span className={styles.flag}>variant: default</span>
                        </div>
                        <div className={styles.section}>
                            <div className={styles.el}>
                                <Select
                                    options={[
                                        { value: '1', label: 'Option 1' },
                                        { value: '2', label: 'Option 2' },
                                    ]}
                                    placeholder="Select option"
                                    variant="leader"
                                    size="bg"
                                    onChange={(value) => console.log(value)}
                                    fullWidth
                                />
                            </div>
                            <div className={styles.el}>
                                <Select
                                    options={[
                                        { value: '1', label: 'Option 1' },
                                        { value: '2', label: 'Option 2' },
                                    ]}
                                    placeholder="Select option"
                                    variant="leader"
                                    size="md"
                                    onChange={(value) => console.log(value)}
                                    fullWidth
                                />
                            </div>
                            <div className={styles.el}>
                                <Select
                                    options={[
                                        { value: '1', label: 'Option 1' },
                                        { value: '2', label: 'Option 2' },
                                    ]}
                                    placeholder="Select option"
                                    variant="leader"
                                    size="sm"
                                    onChange={(value) => console.log(value)}
                                    fullWidth
                                />
                            </div>
                            <div className={styles.el}>
                                <Select
                                    options={[
                                        { value: '1', label: 'Option 1' },
                                        { value: '2', label: 'Option 2' },
                                    ]}
                                    placeholder="Select option"
                                    variant="leader"
                                    size="md"
                                    onChange={(value) => console.log(value)}
                                    error
                                    fullWidth
                                />
                            </div>
                            <span className={styles.flag}>variant: leader</span>
                        </div>
                        <div className={styles.section}>
                            <div className={styles.el}>
                                <Select
                                    options={[
                                        { value: '1', label: 'Option 1' },
                                        { value: '2', label: 'Option 2' },
                                    ]}
                                    placeholder="Select option"
                                    variant="empty"
                                    size="bg"
                                    onChange={(value) => console.log(value)}
                                    fullWidth
                                />
                            </div>
                            <div className={styles.el}>
                                <Select
                                    options={[
                                        { value: '1', label: 'Option 1' },
                                        { value: '2', label: 'Option 2' },
                                    ]}
                                    placeholder="Select option"
                                    variant="empty"
                                    size="md"
                                    onChange={(value) => console.log(value)}
                                    fullWidth
                                />
                            </div>
                            <div className={styles.el}>
                                <Select
                                    options={[
                                        { value: '1', label: 'Option 1' },
                                        { value: '2', label: 'Option 2' },
                                    ]}
                                    placeholder="Select option"
                                    variant="empty"
                                    size="sm"
                                    onChange={(value) => console.log(value)}
                                    fullWidth
                                />
                            </div>
                            <div className={styles.el}>
                                <Select
                                    options={[
                                        { value: '1', label: 'Option 1' },
                                        { value: '2', label: 'Option 2' },
                                    ]}
                                    placeholder="Select option"
                                    variant="empty"
                                    size="md"
                                    onChange={(value) => console.log(value)}
                                    error
                                    fullWidth
                                />
                            </div>
                            <span className={styles.flag}>variant: empty</span>
                        </div>
                        <div className={styles.section}>
                            <div className={styles.el}>
                                <Select
                                    options={[
                                        { value: '1', label: 'Option 1' },
                                        { value: '2', label: 'Option 2' },
                                    ]}
                                    placeholder="Select option"
                                    variant="glass"
                                    size="bg"
                                    onChange={(value) => console.log(value)}
                                    fullWidth
                                />
                            </div>
                            <div className={styles.el}>
                                <Select
                                    options={[
                                        { value: '1', label: 'Option 1' },
                                        { value: '2', label: 'Option 2' },
                                    ]}
                                    placeholder="Select option"
                                    variant="glass"
                                    size="md"
                                    onChange={(value) => console.log(value)}
                                    fullWidth
                                />
                            </div>
                            <div className={styles.el}>
                                <Select
                                    options={[
                                        { value: '1', label: 'Option 1' },
                                        { value: '2', label: 'Option 2' },
                                    ]}
                                    placeholder="Select option"
                                    variant="glass"
                                    size="sm"
                                    onChange={(value) => console.log(value)}
                                    fullWidth
                                />
                            </div>
                            <div className={styles.el}>
                                <Select
                                    options={[
                                        { value: '1', label: 'Option 1' },
                                        { value: '2', label: 'Option 2' },
                                    ]}
                                    placeholder="Select option"
                                    variant="glass"
                                    size="md"
                                    onChange={(value) => console.log(value)}
                                    error
                                    fullWidth
                                />
                            </div>
                            <span className={styles.flag}>variant: glass</span>
                        </div>
                    </div>
                </div>
                <div className={styles.component}>
                    <div className={styles.grid}>
                        <div className={styles.section}>
                            <div className={styles.el}>
                                <Spinner variant='default' size='lg' />
                            </div>
                            <div className={styles.el}>
                                <Spinner variant='default' />
                            </div>
                            <div className={styles.el}>
                                <Spinner variant='default' size='sm' />
                            </div>
                            <span className={styles.flag}>variant: default</span>
                        </div>
                        <div className={clsx(styles.section, styles.overlay)}>
                            <div className={styles.el}>
                                <Spinner variant='leader' size='lg' />
                            </div>
                            <div className={styles.el}>
                                <Spinner variant='leader' />
                            </div>
                            <div className={styles.el}>
                                <Spinner variant='leader' size='sm' />
                            </div>
                            <span className={styles.flag}>variant: leader</span>
                        </div>
                        <div className={styles.section}>
                            <div className={styles.el}>
                                <Spinner variant='contrast' size='lg' />
                            </div>
                            <div className={styles.el}>
                                <Spinner variant='contrast' />
                            </div>
                            <div className={styles.el}>
                                <Spinner variant='contrast' size='sm' />
                            </div>
                            <span className={styles.flag}>variant: contrast</span>
                        </div>
                        <div className={styles.section}>
                            <div className={styles.el}>
                                <Spinner variant='accent' size='lg' />
                            </div>
                            <div className={styles.el}>
                                <Spinner variant='accent' />
                            </div>
                            <div className={styles.el}>
                                <Spinner variant='accent' size='sm' />
                            </div>
                            <span className={styles.flag}>variant: accent</span>
                        </div>
                        <div className={styles.section}>
                            <div className={styles.el}>
                                <Spinner variant='brand' size='lg' />
                            </div>
                            <div className={styles.el}>
                                <Spinner variant='brand' />
                            </div>
                            <div className={styles.el}>
                                <Spinner variant='brand' size='sm' />
                            </div>
                            <span className={styles.flag}>variant: brand</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </>
    );
}